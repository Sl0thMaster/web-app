import { ApiProperty } from '@nestjs/swagger';

export class CreateGarageDto {
  @ApiProperty({ example: 'BodyRepair', description: 'Название' })
  name: string;
  @ApiProperty({ example: 'Кузовной ремонт', description: 'Специализация' })
  specialization: string;
  @ApiProperty({
    example: [1, 2],
    description: 'Список обслуживаемых неисправностей',
  })
  makes: number[];
  @ApiProperty({
    example: [1, 2],
    description: 'Список обслуживаемых марок авто',
  })
  malfunctions: number[];
}