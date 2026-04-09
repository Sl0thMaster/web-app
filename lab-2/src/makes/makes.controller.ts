import { Make } from './make.entity';
import { MakesService } from './makes.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';


@Controller('makes')
export class MakesController {
    constructor(private readonly makesService: MakesService) {}

    @Get()
      findAll() {
          return this.makesService.findAll();
      }

    @Get(':id')
      findOne(@Param('id') id: string) {
          return this.makesService.findOne(+id);
      }

    @Put(':id')
      update(@Param('id') id: string, @Body() updateMake: Make) {
          return this.makesService.update(+id, updateMake);
      }

    @Post()
      create(@Body() createMake: Make) {
          return this.makesService.create(createMake);
      }

    @Delete(':id')
      remove(@Param('id') id: string) {
          return this.makesService.remove(+id);
      }

    

}
