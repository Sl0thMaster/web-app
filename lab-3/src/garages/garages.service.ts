import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Injectable, NotFoundException } from "@nestjs/common";
import { Garage } from "./garage.entity";
import { Make } from "src/makes/make.entity";
import { Malfunction } from "src/malfunctions/malfunction.entity";
import { CreateGarageDto } from './dto/garage.dto';
import { IncompleteGarageDto } from './dto/incomplete-garage.dto';

@Injectable()
export class GaragesService {
    constructor(
        @InjectRepository(Garage)
        private readonly garageRepository: Repository<Garage>,
        @InjectRepository(Make)
        private readonly makeRepository: Repository<Make>,
        @InjectRepository(Malfunction)
        private readonly malfunctionRepository: Repository<Malfunction>,
    ) {}

    async create(garageDto: CreateGarageDto): Promise<Garage>
    {
        const garage = this.garageRepository.create();
        garage.name = garageDto.name;
        garage.specialization = garageDto.specialization;
        const makes = await this.makeRepository.findBy({
            id: In(garageDto.makes)
        });
        garage.makes = makes;
        await this.garageRepository.save(garage);
        return garage
    }

    async findAll(): Promise<Garage[]> {
        const garages = await this.garageRepository.find({
        relations: {
            makes: true,
            malfunctions: true,
        },
        });
        return garages;
    }

    async findOne(id: number): Promise<Garage> {
        const garage = await this.garageRepository.findOne({
        where: { id },
        relations: { makes: true, malfunctions: true },
        });
        if (!garage) {
            throw new NotFoundException(`Garage with id ${id} not found`);
        }
        return garage
    }

    async findIncomplete(): Promise<IncompleteGarageDto[]> {
        const garages = await this.garageRepository.find();
        const incompleteGarages: IncompleteGarageDto[] = garages.map((garage) =>
        {
            const incompleteGarage = new IncompleteGarageDto();
            incompleteGarage.id = garage.id;
            incompleteGarage.name = garage.name;
            return incompleteGarage;
        });
        return incompleteGarages;
    }

    async update(id: number, updatedGarage: Garage) {
        const garage = await this.garageRepository.findOne({ where: { id } });
        if (!garage) {
            throw new NotFoundException(`Garage with id ${id} not found`);
        }
        garage.name = updatedGarage.name;
        garage.specialization = updatedGarage.specialization;
        garage.makes = updatedGarage.makes;
        garage.malfunctions = updatedGarage.malfunctions;
        await this.garageRepository.save(garage);
        return garage;
    }

    remove(id: number) {
        this.garageRepository.delete({ id });
    }
}