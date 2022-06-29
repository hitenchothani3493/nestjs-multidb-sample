import { Inject, Injectable, Scope } from '@nestjs/common';
import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose';
import { REQUEST } from '@nestjs/core';
import { Request } from '@nestjs/common';
import { CatsService } from '../../cats/cats.service';
import { Connection } from 'mongoose';

@Injectable({ scope: Scope.REQUEST })
export class MongooseConfigService implements MongooseOptionsFactory {
    constructor(
        @Inject(REQUEST) private readonly request: Request,
        // private readonly catsService: CatsService,
    ) {
}

    createMongooseOptions(): MongooseModuleOptions {
/*var cats = this.catsService.findAll();
console.log(cats);*/
console.log(this.request);
console.log(process.env.MONGO_TEST2_URL);
        return {
            uri: process.env.MONGO_TEST2_URL
        };
    }
}