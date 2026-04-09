import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Make } from "./make.entity";

@Injectable()
export class MakesService {
    constructor(private readonly datasourceService: DatasourceService) {}

    create(make: Make) {
        this.datasourceService.getMakes().push(make);
        return make;
    }

    findOne(id: number) {
    return this.datasourceService
      .getMakes()
      .find((make) => make.id === id);
    }

    findAll(): Make[] {
        return this.datasourceService.getMakes();
    }

    update(id: number, updatedMake: Make) {
        const index = this.datasourceService
        .getMakes()
        .findIndex((make) => make.id === id);
        this.datasourceService.getMakes()[index] = updatedMake;
        return this.datasourceService.getMakes()[index];
    }

    remove(id: number) {
        const index = this.datasourceService
        .getMakes()
        .findIndex((make) => make.id === id);
        this.datasourceService.getMakes().splice(index, 1);
        return HttpStatus.OK;
    }




}

