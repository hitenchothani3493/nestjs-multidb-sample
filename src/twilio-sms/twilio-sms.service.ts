import { Injectable } from '@nestjs/common';
const accountSid = "AC23329adbe79eb80eabce7ed549b47bde";
const authToken = "f4f01302f595a639a8ac75920fd217b2";
const fromNumber = "+16205915861";
const twilio = require('twilio')(accountSid, authToken);

@Injectable()
export class TwilioSmsService {
	
	async sendSms(message, to) {
		twilio.messages.create({
			body: message,
			from: fromNumber,
			to: to
		})
		.then(message => console.log(message));
	}
}
