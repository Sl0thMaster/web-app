import { Module } from "@nestjs/common";
import { Malfunction } from "./malfunction.entity";
import { DatasourceModule } from "src/datasource/datasource.module";
import { MalfunctionsController } from "./malfunctions.controller";
import { MalfunctionsService } from "./malfunctions.service";
@Module({
    controllers: [MalfunctionsController],
    providers:[MalfunctionsService],
    imports: [DatasourceModule]
})
export class MalfunctionsModule{}