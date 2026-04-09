import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { Make } from "./make.entity";
import { Garage } from "src/garages/garage.entity";
import { DatasourceModule } from "src/datasource/datasource.module";
import { MakesController } from "./makes.controller";
import { MakesService } from "./makes.service";
@Module({
    controllers: [MakesController],
    providers:[MakesService],
    imports: [
      DatasourceModule,
      TypeOrmModule.forFeature([Garage, Make])
    ]
})
export class MakesModule{}