import { ApiProperty } from '@nestjs/swagger';

export class CreateMakeDto {
  @ApiProperty({ example: 'Lada', description: 'Марка авто' })
  name: string;
  @ApiProperty({ example: 'РФ', description: 'Страна' })
  country: string;
}
