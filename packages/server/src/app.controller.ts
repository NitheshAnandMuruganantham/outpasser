import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { Public } from './common/decorators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get('healthz')
  getHealth() {
    return this.appService.getHello();
  }

  @Public()
  @Post('gatepass')
  gatecheck(@Body() body: any, @Req() req: Request) {
    if (!body.id || !body.key || !req.headers['x-api-key']) {
      throw new ForbiddenException();
    } else {
      return this.appService.gateCheck(
        parseInt(body.id, 10),
        body.key,
        req.headers['x-api-key'].toString(),
      );
    }
  }
}
