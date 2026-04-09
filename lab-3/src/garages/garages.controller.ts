import { Garage } from './garage.entity';
import { GaragesService } from './garages.service';
import { CreateGarageDto } from './dto/garage.dto';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';


@Controller('garages')
export class GaragesController {
    constructor(private readonly garagesService: GaragesService) {}

    @Get()
      findAll() {
          return this.garagesService.findAll();
      }

    @Get(':id')
      findOne(@Param('id') id: string) {
          return this.garagesService.findOne(+id);
      }

    @Get('incomplete')
      findIncomplete() {
        this.garagesService.findIncomplete();
      }

    @Put(':id')
      update(@Param('id') id: string, @Body() updateGarage: Garage) {
          return this.garagesService.update(+id, updateGarage);
      }

    @Post()
      create(@Body() garageDto: CreateGarageDto): Promise<Garage> {
          return this.garagesService.create(garageDto);
      }

    @Delete(':id')
      remove(@Param('id') id: string) {
          return this.garagesService.remove(+id);
      }

    

}
