import { Controller, Get } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ShopifyApiService } from './shopify-api.service';

let cronOptions = {
    timeZone: "Asia/Kolkata"
}

@Controller('shopify-api')
export class ShopifyApiController {
	constructor(private readonly shopifyApiService: ShopifyApiService) {}

	@Get("getAccessScope")
	async getAccessScope() {

	  return this.shopifyApiService.getAccessScope();
	}

	@Get("getProducts")
	async getProducts() {

	  return this.shopifyApiService.getProducts();
	}

	@Get("getCustomers")
	async getCustomers() {

	  return this.shopifyApiService.getCustomers();
	}

	@Get("getOrders")
	async getOrders() {

	  return this.shopifyApiService.getOrders();
	}

	@Get("test")
	async test() {

		var response = await this.shopifyApiService.test();
		console.log(response);
		return response;
	}

	// @Cron("*/2 * * * * *", cronOptions)
    async testCorn() {
        console.log("Cron:: testCron");
        await this.shopifyApiService.test();
    }
}
