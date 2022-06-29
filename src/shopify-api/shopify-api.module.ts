import { Module } from '@nestjs/common';
import { ShopifyApiController } from './shopify-api.controller';
import { ShopifyApiService } from './shopify-api.service';

@Module({
  controllers: [ShopifyApiController],
  providers: [ShopifyApiService]
})
export class ShopifyApiModule {}
