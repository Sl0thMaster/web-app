import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Malfunction } from "./malfunction.entity";

@Injectable()
export class MalfunctionsService {
    constructor(private readonly datasourceService: DatasourceService) {}

    create(malfunction: Malfunction) {
        this.datasourceService.getMalfunctions().push(malfunction);
        return malfunction;
    }

    findOne(id: number) {
    return this.datasourceService
      .getMalfunctions()
      .find((malfunction) => malfunction.id === id);
    }

    findAll(): Malfunction[] {
        return this.datasourceService.getMalfunctions();
    }

    update(id: number, updatedMalfunction: Malfunction) {
        const index = this.datasourceService
        .getMalfunctions()
        .findIndex((malfunction) => malfunction.id === id);
        this.datasourceService.getMalfunctions()[index] = updatedMalfunction;
        return this.datasourceService.getMalfunctions()[index];
    }

    remove(id: number) {
        const index = this.datasourceService
        .getMalfunctions()
        .findIndex((malfunction) => malfunction.id === id);
        this.datasourceService.getMalfunctions().splice(index, 1);
        return HttpStatus.OK;
    }




}

