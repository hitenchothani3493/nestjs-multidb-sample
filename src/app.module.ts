import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { ScheduleModule } from '@nestjs/schedule';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { ShopifyApiModule } from './shopify-api/shopify-api.module';
// import { TwilioSmsModule } from './twilio-sms/twilio-sms.module';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';

import { MongooseConfigService } from './helpers/utilities/MongooseConfigService';

require('dotenv').config();
// console.log(process.env.MONGO_TEST_URL);
// console.log(process.env.MONGO_CITY_URL);
@Module({
    imports: [
        // ScheduleModule.forRoot(),

        // MongooseModule.forRoot(process.env.MONGO_COUNTRY_URL, { connectionName: 'myCountryDB' }),

        // MongooseModule.forRoot(process.env.MONGO_CITY_URL, { connectionName: 'myCityDB' }),

        /*MongooseModule.forRootAsync({
            useClass: MongooseConfigService,
        }),*/

        // ShopifyApiModule,
        // TwilioSmsModule,

//multiDb START
        CatsModule,
        DogsModule,
        MongooseModule.forRoot(process.env.MONGO_TEST_URL, { connectionName: 'MYTEST' }),
        // MongooseModule.forRoot(process.env.MONGO_TEST2_URL, { connectionName: 'MYTEST2' }),
        MongooseModule.forRootAsync({
            connectionName: 'MYTEST2',
            useClass: MongooseConfigService,
        }),

//working async connection        
        /*MongooseModule.forRootAsync({
            connectionName: 'MYTEST',
            useFactory: () => ({
                uri: process.env.MONGO_TEST_URL,
            }),
        }),*/
        /*MongooseModule.forRootAsync({
            connectionName: 'MYTEST2',
            useFactory: () => ({
                uri: process.env.MONGO_TEST2_URL,
            }),
        }),*/
//multiDb END
    ]
})
export class AppModule {}
