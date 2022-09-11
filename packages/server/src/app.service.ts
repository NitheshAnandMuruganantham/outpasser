import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService, private config: ConfigService) {}
  getHello(): string {
    return 'Hello World!';
  }
  async gateCheck(id: number, key: string, apikey: string) {
    try {
      const storedApiKey = this.config.get('DEVICE_KEY');
      if (apikey === storedApiKey) {
        const validate = await this.prisma.passes.findFirstOrThrow({
          where: {
            AND: {
              id,
              key,
            },
          },
        });
        if (validate.checked_in && validate.checked_out) {
          throw new ForbiddenException();
        } else if (validate.checked_in) {
          await this.prisma.passes.update({
            where: {
              id,
            },
            data: {
              checked_out: true,
            },
          });
        } else {
          await this.prisma.passes.update({
            where: {
              id,
            },
            data: {
              checked_in: true,
            },
          });
        }
      }
      return 'ok';
    } catch {
      throw new ForbiddenException();
    }
  }
}
