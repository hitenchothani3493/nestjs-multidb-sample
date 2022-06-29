import { Test, TestingModule } from '@nestjs/testing';
import { ShopifyApiService } from './shopify-api.service';

describe('ShopifyApiService', () => {
  let service: ShopifyApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopifyApiService],
    }).compile();

    service = module.get<ShopifyApiService>(ShopifyApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
