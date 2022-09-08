import { Injectable } from '@nestjs/common';
import { MailerService as MailRootService } from '@nestjs-modules/mailer';

@Injectable()
export class MailerService {
  constructor(private mailService: MailRootService) {}
  async sendBillEmail(email: string, dt: any) {
    await this.mailService.sendMail({
      to: email,
      subject: 'out ass approal',
      template: 'newBill',
      context: {},
    });
  }
  async sendPasswordResetEmail(email: string, link: string) {
    await this.mailService.sendMail({
      to: email,
      subject: 'password reset request',
      template: 'passwordReset',
      context: {
        link,
      },
    });
  }
}
