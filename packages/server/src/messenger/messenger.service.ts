import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectTwilio, TwilioClient } from 'nestjs-twilio';

@Injectable()
export class MessengerService {
  constructor(
    @InjectTwilio()
    private readonly client: TwilioClient,
    private config: ConfigService,
  ) {}

  async sendSMS(phone: string, body: string) {
    try {
      const data = await this.client.messages.create({
        body,
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
