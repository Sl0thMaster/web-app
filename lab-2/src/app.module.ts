import { Module } from '@nestjs/common';
import { MakesModule } from './makes/makes.module';
import { GaragesModule } from './garages/garages.module';
import { DatasourceModule } from './datasource/datasource.module';
import { MalfunctionsModule } from './malfunctions/malfunctions.module';
@Module({
  imports: [MakesModule, GaragesModule , MalfunctionsModule, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
