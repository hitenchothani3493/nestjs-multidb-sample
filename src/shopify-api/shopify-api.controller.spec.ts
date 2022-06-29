import { Test, TestingModule } from '@nestjs/testing';
import { ShopifyApiController } from './shopify-api.controller';

describe('ShopifyApiController', () => {
  let controller: ShopifyApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopifyApiController],
    }).compile();

    controller = module.get<ShopifyApiController>(ShopifyApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
