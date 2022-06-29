import { Injectable } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { CreateDogDto } from './dto/create-dog.dto';
import { Dog, DogDocument } from './schemas/dog.schema';

@Injectable()
export class DogsService {
    constructor(
        @InjectConnection('MYTEST2') private connection: Connection,
        @InjectModel(Dog.name, 'MYTEST2') private readonly dogModel: Model<DogDocument>,
    ) {
console.log(Connection);
    }

    async create(createDogDto: CreateDogDto): Promise<Dog> {
        const createdDog = await this.dogModel.create(createDogDto);
        return createdDog;
    }

    async findAll(): Promise<Dog[]> {
        return this.dogModel.find().exec();
    }

    async findOne(id: string): Promise<Dog> {
        return this.dogModel.findOne({ _id: id }).exec();
    }

    async delete(id: string) {
        const deletedDog = await this.dogModel
        .findByIdAndRemove({ _id: id })
        .exec();
        return deletedDog;
    }
}
