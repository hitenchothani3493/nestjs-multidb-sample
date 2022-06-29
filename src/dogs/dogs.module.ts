import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { Dog, DogSchema } from './schemas/dog.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Dog.name, schema: DogSchema }], 'MYTEST2'),
    ],
    controllers: [DogsController],
    providers: [DogsService]
})
export class DogsModule {}
