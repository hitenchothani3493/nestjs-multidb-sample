import { Module } from '@nestjs/common';
import { TwilioSmsController } from './twilio-sms.controller';
import { TwilioSmsService } from './twilio-sms.service';

@Module({
  controllers: [TwilioSmsController],
  providers: [TwilioSmsService]
})
export class TwilioSmsModule {}
