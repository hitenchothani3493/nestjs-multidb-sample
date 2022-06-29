import { Test, TestingModule } from '@nestjs/testing';
import { TwilioSmsController } from './twilio-sms.controller';

describe('TwilioSmsController', () => {
  let controller: TwilioSmsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TwilioSmsController],
    }).compile();

    controller = module.get<TwilioSmsController>(TwilioSmsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
