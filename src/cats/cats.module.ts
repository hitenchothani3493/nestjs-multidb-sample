import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat, CatSchema } from './schemas/cat.schema';

import { MongooseConfigService } from '../helpers/utilities/MongooseConfigService';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }], 'MYTEST'),
    ],
    controllers: [CatsController],
    providers: [CatsService]
})
export class CatsModule {}
