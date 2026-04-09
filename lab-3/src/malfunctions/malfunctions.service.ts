import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Injectable, NotFoundException } from "@nestjs/common";
import { Malfunction } from "./malfunction.entity";
import { CreateMalfunctionDto } from './dto/malfunction.dto';
import { IncompleteMalfunctionDto } from './dto/incomplete-malfunction.dto';

@Injectable()
export class MalfunctionsService {
    constructor(
        @InjectRepository(Malfunction)
        private readonly malfunctionRepository: Repository<Malfunction>,
    ) {}

    async create(malfunctionDto: CreateMalfunctionDto): Promise<Malfunction>
    {
        const malfunction = this.malfunctionRepository.create();
        malfunction.name = malfunctionDto.name;
        malfunction.price = malfunctionDto.price;
        await this.malfunctionRepository.save(malfunction);
        return malfunction
    }

    async findAll(): Promise<Malfunction[]> {
        const malfunctions = await this.malfunctionRepository.find({});
        return malfunctions;
    }

    async findOne(id: number): Promise<Malfunction> {
        const malfunction = await this.malfunctionRepository.findOne({
        where: { id },
        });
        if (!malfunction) {
            throw new NotFoundException(`Malfunction with id ${id} not found`);
        }
        return malfunction
    }

    async findIncomplete(): Promise<IncompleteMalfunctionDto[]> {
        const malfunctions = await this.malfunctionRepository.find();
        const incompleteMalfunctions: IncompleteMalfunctionDto[] = malfunctions.map((malfunction) =>
        {
            const incompleteMalfunction = new IncompleteMalfunctionDto();
            incompleteMalfunction.id = malfunction.id;
            incompleteMalfunction.name = malfunction.name;
            return incompleteMalfunction;
        });
        return incompleteMalfunctions;
    }

    async update(id: number, updatedMalfunction: Malfunction) {
        const malfunction = await this.malfunctionRepository.findOne({ where: { id } });
        if (!malfunction) {
            throw new NotFoundException(`Malfunction with id ${id} not found`);
        }
        malfunction.name = updatedMalfunction.name;
        malfunction.price = updatedMalfunction.price;
        await this.malfunctionRepository.save(malfunction);
        return malfunction;
    }

    remove(id: number) {
        this.malfunctionRepository.delete({ id });
    }
}