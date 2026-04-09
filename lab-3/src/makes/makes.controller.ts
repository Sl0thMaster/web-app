import { Make } from './make.entity';
import { MakesService } from './makes.service';
import { CreateMakeDto } from './dto/make.dto';
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

    @Get('incomplete')
      findIncomplete() {
        this.makesService.findIncomplete();
      }

    @Put(':id')
      update(@Param('id') id: string, @Body() updateMake: Make) {
          return this.makesService.update(+id, updateMake);
      }

    @Post()
      create(@Body() makeDto: CreateMakeDto): Promise<Make> {
          return this.makesService.create(makeDto);
      }
    
    @Delete(':id')
      remove(@Param('id') id: string) {
          return this.makesService.remove(+id);
      }

    

}
