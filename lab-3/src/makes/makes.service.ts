import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Injectable, NotFoundException } from "@nestjs/common";
import { Make } from "./make.entity";
import { CreateMakeDto } from './dto/make.dto';
import { IncompleteMakeDto } from './dto/incomplete-make.dto';

@Injectable()
export class MakesService {
    constructor(
        @InjectRepository(Make)
        private readonly makeRepository: Repository<Make>,
    ) {}

    async create(makeDto: CreateMakeDto): Promise<Make>
    {
        const make = this.makeRepository.create();
        make.name = makeDto.name;
        make.country = makeDto.country;
        await this.makeRepository.save(make);
        return make
    }

    async findAll(): Promise<Make[]> {
        const makes = await this.makeRepository.find({});
        return makes;
    }

    async findOne(id: number): Promise<Make> {
        const make = await this.makeRepository.findOne({
        where: { id }
        });
        if (!make) {
            throw new NotFoundException(`Make with id ${id} not found`);
        }
        return make
    }

    async findIncomplete(): Promise<IncompleteMakeDto[]> {
        const makes = await this.makeRepository.find();
        const incompleteMakes: IncompleteMakeDto[] = makes.map((make) =>
        {
            const incompleteMake = new IncompleteMakeDto();
            incompleteMake.id = make.id;
            incompleteMake.name = make.name;
            return incompleteMake;
        });
        return incompleteMakes;
    }

    async update(id: number, updatedMake: Make) {
        const make = await this.makeRepository.findOne({ where: { id } });
        if (!make) {
            throw new NotFoundException(`Make with id ${id} not found`);
        }
        make.name = updatedMake.name;
        make.country = updatedMake.country;
        await this.makeRepository.save(make);
        return make;
    }

    remove(id: number) {
        this.makeRepository.delete({ id });
    }
}