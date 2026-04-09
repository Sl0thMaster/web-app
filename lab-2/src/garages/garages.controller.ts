import { Garage } from './garage.entity';
import { GaragesService } from './garages.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';


@Controller('garages')
export class GaragesController {
    constructor(private readonly garagesService: GaragesService) {}

    @Get()
      findAll() {
          return this.garagesService.findAll();
      }

    @Get(':type')
      findAllType(@Param('type') type: string) {
          return this.garagesService.findAllType(type);
      }  

    @Get(':id')
      findOne(@Param('id') id: string) {
          return this.garagesService.findOne(+id);
      }

    @Put(':id')
      update(@Param('id') id: string, @Body() updateGarage: Garage) {
          return this.garagesService.update(+id, updateGarage);
      }

    @Post()
      create(@Body() createGarage: Garage) {
          return this.garagesService.create(createGarage);
      }

    @Delete(':id')
      remove(@Param('id') id: string) {
          return this.garagesService.remove(+id);
      }

    

}
