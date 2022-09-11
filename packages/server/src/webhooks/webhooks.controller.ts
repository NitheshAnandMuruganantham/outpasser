import { Body, Controller, Post } from '@nestjs/common';
import { WebhooksService } from './webhooks.service';
import { Public } from '../common/decorators';

@Controller('webhooks')
export class WebhooksController {
  constructor(private webhookservice: WebhooksService) {}

  @Post('/new/pass')
  @Public()
  newPass(@Body() body: any) {
    return this.webhookservice.sendPassNotification(body.event.data.new.id);
  }
}
