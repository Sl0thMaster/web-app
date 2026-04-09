import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Garage } from "./garage.entity";

@Injectable()
export class GaragesService {
    constructor(private readonly datasourceService: DatasourceService) {}

    create(garage: Garage) {
        this.datasourceService.getGarages().push(garage);
        return garage;
    }

    findOne(id: number) {
    return this.datasourceService
      .getGarages()
      .find((garage) => garage.id === id);
    }

    findAll(): Garage[] {
        return this.datasourceService.getGarages();
    }

    findAllType(type: string): Garage[] {
        // Фильтруем экспонаты, оставляя только те, у которых свойство 'type' совпадает с искомым
        return this.findAll().filter(garage => garage.type === type);
    }

    update(id: number, updatedGarage: Garage) {
        const index = this.datasourceService
        .getGarages()
        .findIndex((garage) => garage.id === id);
        this.datasourceService.getGarages()[index] = updatedGarage;
        return this.datasourceService.getGarages()[index];
    }

    remove(id: number) {
        const index = this.datasourceService
        .getGarages()
        .findIndex((garage) => garage.id === id);
        this.datasourceService.getGarages().splice(index, 1);
        return HttpStatus.OK;
    }




}

