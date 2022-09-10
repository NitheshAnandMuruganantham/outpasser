import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TwilioService } from 'nestjs-twilio';

@Injectable()
export class MessengerService {
  constructor(
    private readonly client: TwilioService,
    private config: ConfigService,
  ) {}

  async sendSMS(phone: string, dt: any) {
    try {
      const data = await this.client.client.messages.create({
        body: `new request` + `\n` + `\n` + `\n` + `\n` + `\n`,
        to: phone,
        from: this.config.get('TWILIO_PHONE'),
      });
      return data;
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}
