import { join } from 'path';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MessengerService } from './messenger/messenger.service';
import { TwilioModule } from 'nestjs-twilio';
import { PrismaModule } from 'nestjs-prisma';
import { WebhooksModule } from './webhooks/webhooks.module';

import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
        TWILIO_CONFIG: Joi.required(),
        TWILIO_PHONE: Joi.string().required(),
        ADMIN_SECRET: Joi.string().required(),
        API_KEY: Joi.string().required(),
        DEVICE_KEY: Joi.string().required(),
        HASURA_URL: Joi.string().required(),
        FORGOT_PASSWORD_SECRET: Joi.string().required(),
        AT_PRIVATE: Joi.string().required(),
        AT_PUBLIC: Joi.string().required(),
        RT_PRIVATE: Joi.string().required(),
        RT_PUBLIC: Joi.string().required(),
        PORT: Joi.required(),
        SMTP_CONFIG: Joi.required(),
        AWS_SERVICE_CONFIG: Joi.required(),
        FIREBASE_SERVICE: Joi.required(),
      }),
    }),
    AuthModule,
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config) => {
        const smtp_config = JSON.parse(config.getOrThrow('SMTP_CONFIG'));

        return {
          transport: {
            host: smtp_config.host,
            secure: true,
            auth: {
              user: smtp_config.user,
              pass: smtp_config.password,
            },
          },
          defaults: {
            from: `no-replay <${smtp_config.default_sender}>`,
          },
          template: {
            dir: join(__dirname, './mailer/templates'),
            adapter: new HandlebarsAdapter(),
            options: {
              strict: true,
            },
          },
        };
      },
      inject: [ConfigService],
    }),
    TwilioModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config) => JSON.parse(config.get('TWILIO_CONFIG')),
      inject: [ConfigService],
    }),
    MailerModule,
    WebhooksModule,
  ],
  controllers: [AppController],
  providers: [AppService, MessengerService],
})
export class AppModule {}
