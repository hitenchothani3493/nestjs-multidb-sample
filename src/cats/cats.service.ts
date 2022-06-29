import { Injectable } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat, CatDocument } from './schemas/cat.schema';

@Injectable()
export class CatsService {
    constructor(
        @InjectConnection('MYTEST') private connection: Connection,
        @InjectModel(Cat.name, 'MYTEST') private readonly catModel: Model<CatDocument>,
    ) {
console.log(Connection);
    }

    async create(createCatDto: CreateCatDto): Promise<Cat> {
        const createdCat = await this.catModel.create(createCatDto);
        return createdCat;
    }

    async findAll(): Promise<Cat[]> {
        return this.catModel.find().exec();
    }

    async findOne(id: string): Promise<Cat> {
        return this.catModel.findOne({ _id: id }).exec();
    }

    async delete(id: string) {
        const deletedCat = await this.catModel
        .findByIdAndRemove({ _id: id })
        .exec();
        return deletedCat;
    }
}
