import { Module } from "@nestjs/common";
import { Make } from "./make.entity";
import { DatasourceModule } from "src/datasource/datasource.module";
import { MakesController } from "./makes.controller";
import { MakesService } from "./makes.service";
@Module({
    controllers: [MakesController],
    providers:[MakesService],
    imports: [DatasourceModule]
})
export class MakesModule{}