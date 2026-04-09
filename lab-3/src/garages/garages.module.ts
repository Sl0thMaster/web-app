import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Garage } from './garage.entity';
import { Make } from "src/makes/make.entity";
import { Malfunction } from "src/malfunctions/malfunction.entity";
import { DatasourceModule } from "src/datasource/datasource.module";
import { GaragesController } from "./garages.controller";
import { GaragesService } from "./garages.service";
@Module({
  controllers: [GaragesController],
  providers:[GaragesService],
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Garage, Make, Malfunction])
  ]
})
export class GaragesModule {}
