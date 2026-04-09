import { Module } from '@nestjs/common';
import { Garage } from './garage.entity'
import { DatasourceModule } from "src/datasource/datasource.module";
import { GaragesController } from "./garages.controller";
import { GaragesService } from "./garages.service";
@Module({
  controllers: [GaragesController],
  providers:[GaragesService],
  imports: [DatasourceModule]
})
export class GaragesModule {}
