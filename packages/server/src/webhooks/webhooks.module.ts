import { MiddlewareConsumer, Module } from '@nestjs/common';
import { WebhooksController } from './webhooks.controller';
import { WebhooksService } from './webhooks.service';
import { AuthMiddleware } from '../middleware/auth.middleware';
import { MessengerService } from 'src/messenger/messenger.service';

@Module({
  controllers: [WebhooksController],
  providers: [WebhooksService, MessengerService],
})
export class WebhooksModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(WebhooksController);
  }
}
