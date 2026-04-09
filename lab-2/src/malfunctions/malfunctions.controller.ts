import { Malfunction } from './malfunction.entity';
import { MalfunctionsService } from './malfunctions.service';
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

    @Put(':id')
      update(@Param('id') id: string, @Body() updateMalfunction: Malfunction) {
          return this.malfunctionsService.update(+id, updateMalfunction);
      }

    @Post()
      create(@Body() createMalfunction: Malfunction) {
          return this.malfunctionsService.create(createMalfunction);
      }

    @Delete(':id')
      remove(@Param('id') id: string) {
          return this.malfunctionsService.remove(+id);
      }

    

}
