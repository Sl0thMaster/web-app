import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { Malfunction } from "./malfunction.entity";
import { Garage } from "src/garages/garage.entity";
import { DatasourceModule } from "src/datasource/datasource.module";
import { MalfunctionsController } from "./malfunctions.controller";
import { MalfunctionsService } from "./malfunctions.service";
@Module({
  controllers: [MalfunctionsController],
  providers:[MalfunctionsService],
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Garage, Malfunction])
  ]
})
export class MalfunctionsModule{}