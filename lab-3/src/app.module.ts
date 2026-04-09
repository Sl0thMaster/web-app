import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MakesModule } from './makes/makes.module';
import { GaragesModule } from './garages/garages.module';
import { DatasourceModule } from './datasource/datasource.module';
import { MalfunctionsModule } from './malfunctions/malfunctions.module';
@Module({
  imports: [
    MakesModule,
    GaragesModule,
    MalfunctionsModule,
    DatasourceModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'education',
      password: 'password',
      host: 'localhost',
      synchronize: false,
      logging: 'all',
	  entities: ['dist/**/*.entity{.ts,.js}'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
