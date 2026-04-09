import { Injectable } from "@nestjs/common";
import { Make } from "src/makes/make.entity";
import { Garage } from "src/garages/garage.entity";
import { Malfunction } from "src/malfunctions/malfunction.entity";
@Injectable() 
export class DatasourceService {
    private makes: Make[] = []

    getMakes(): Make[] {
        return this.makes;
    }

    private garages: Garage[] = []

    getGarages(): Garage[] {
        return this.garages;
    }

    private malfunctions: Malfunction[] = []

    getMalfunctions(): Malfunction[] {
        return this.malfunctions;
    }
}