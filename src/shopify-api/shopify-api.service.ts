import { Injectable } from '@nestjs/common';

@Injectable()
export class ShopifyApiService {

	Shopify = require('shopify-api-node');

	shopify = new this.Shopify({
	    shopName: 'ssiteststore5.myshopify.com',
	    accessToken: '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'
	});

	async getAccessScope() {

		var returnResult = {
			"status": true,
			"message": "",
			"data": {
				"status": false,
				"message": ""
			}
		};

		try {
		    var accessScope = await this.shopify.accessScope.list();
		    console.log("Access Scope");
		    console.log(accessScope);
		    returnResult["data"]["status"] = true;
		} catch {
			returnResult["data"]["status"] = false;
			returnResult["data"]["message"] = "Sorry something went wrong! Please verify your Access Token and Shop URL";

			return returnResult;
		}

	    const accessRequired = [
	    	"read_assigned_fulfillment_orders",
	    	"read_customers",
	    	"read_inventory",
	    	"read_orders",
	    	"read_product_listings",
	    	"read_products",
	    	"read_third_party_fulfillment_orders",
	    	"read_draft_orders",
	    	"read_merchant_managed_fulfillment_orders",
	    	"read_fulfillments",
	    	"read_all_orders"
	    ];

		var accessScopeArr = Object.keys(accessScope).map(function (key) {
			return accessScope[key]["handle"];
		});

		let accessDifference = accessRequired.filter(x => !accessScopeArr.includes(x));

		if(accessDifference.length > 0) {
			returnResult["data"]["status"] = false;
			returnResult["data"]["message"] = "Sorry something went wrong! Folowing permissions are missing; " + accessDifference.map(this.capitalize).join(", ");
		}

	    return returnResult;
	}

	capitalize(item) {
		return item.split('_').join(' ').toUpperCase();
	}

	async getProducts() {

	    const productCount = await this.shopify.product.count();
	    console.log("Product Count");
	    console.log(productCount);

	    /*(async () => {
	        let params = { limit: 50 };

	        console.log("Products");
	        do {
	            const products = await this.shopify.product.list(params);
	            products.forEach(function(product) {
	                resultOut.push(product);
	                // console.log(product);
	            });
	            params = products.nextPageParameters;
	        } while (params !== undefined);
	    })().catch(console.error);*/

	    let resultOut = [];
        let params = { limit: 50 };

        do {
            const products = await this.shopify.product.list(params);
            products.forEach(function(product) {
                resultOut.push(product);
            });
            params = products.nextPageParameters;
        } while (params !== undefined);

        console.log("Products");
	    console.log(resultOut);

	    return resultOut;
	}

	async getCustomers() {

	    const customerCount = await this.shopify.customer.count();
	    console.log("Product Count");
	    console.log(customerCount);

	    let resultOut = [];
        let params = { limit: 50 };

	    /*(async () => {
	        let params = { limit: 50 };

	        do {
	            const customers = await this.shopify.customer.list(params);
	            params = customers.nextPageParameters;
	        } while (params !== undefined);
	    })().catch(console.error);*/


        do {
            const customers = await this.shopify.customer.list(params);
            customers.forEach(function(customer) {
                resultOut.push(customer);
            });
            params = customers.nextPageParameters;
        } while (params !== undefined);


	    console.log("Customers");
	    console.log(resultOut);

	    return resultOut;
	}

	async getOrders() {

	    const ordersCount = await this.shopify.order.count();
	    console.log("Order Count");
	    console.log(ordersCount);

	    /*(async () => {
	        let params = { limit: 50 };

	        do {
	            const orders = await this.shopify.order.list(params);
	            console.log(orders);
	            params = orders.nextPageParameters;
	        } while (params !== undefined);
	    })().catch(console.error);*/

	    let resultOut = [];
        let params = {
        	limit: 50,
        	status: "any"
        };

        do {
            const orders = await this.shopify.order.list(params);
            orders.forEach(function(order) {
                resultOut.push(order);
            });
            params = orders.nextPageParameters;
        } while (params !== undefined);

		console.log("Orders");
        console.log(resultOut);

        return resultOut;
	}

	async test() {

        var date = new Date("2022-06-19 00:00:00");
        // date.setDate(date.getDate() - (6*60*60*1000));
console.log(date);
        date.setHours(date.getHours() - 25);
        date.toISOString();

	    let resultOut = [];
        let params = {
        	limit: 50,
        	updated_at_min: date
        };

console.log(date);

        const test = await this.shopify.product.list(params);
        console.log(test);

        return test;
	}

	async test1() {

		const customerCount = await this.shopify.order.count();
		console.log(customerCount);


		let resultOut = [];
		let params = { limit: 50, status: "any" };

		do {
			const orders = await this.shopify.order.list(params);

			for(const order of orders) {
				resultOut.push(order);
			};
			params = orders.nextPageParameters;
		} while (params !== undefined);

		return resultOut;

	}
}
