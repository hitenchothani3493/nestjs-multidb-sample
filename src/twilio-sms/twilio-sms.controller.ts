import { Controller, Get } from '@nestjs/common';
import { TwilioSmsService } from './twilio-sms.service';

@Controller('twilio-sms')
export class TwilioSmsController {
	constructor(private readonly twilioSmsService: TwilioSmsService) {}

	@Get("sendSms")
	async sendSms() {

		return this.twilioSmsService.sendSms("Please use the following OTP", "+918369151851");
	}
}
