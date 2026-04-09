import { Malfunction } from './malfunction.entity';
import { MalfunctionsService } from './malfunctions.service';
import { CreateMalfunctionDto } from './dto/malfunction.dto';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';


@Controller('malfunctions')
export class MalfunctionsController {
    constructor(private readonly malfunctionsService: MalfunctionsService) {}

    @Get()
      findAll() {
          return this.malfunctionsService.findAll();
      }

    @Get(':id')
      findOne(@Param('id') id: string) {
          return this.malfunctionsService.findOne(+id);
      }
    
    @Get('incomplete')
      findIncomplete() {
        this.malfunctionsService.findIncomplete();
      }

    @Put(':id')
      update(@Param('id') id: string, @Body() updateMalfunction: Malfunction) {
          return this.malfunctionsService.update(+id, updateMalfunction);
      }

    @Post()
      create(@Body() malfunctionDto: CreateMalfunctionDto): Promise<Malfunction> {
          return this.malfunctionsService.create(malfunctionDto);
      }

    @Delete(':id')
      remove(@Param('id') id: string) {
          return this.malfunctionsService.remove(+id);
      }

    

}
