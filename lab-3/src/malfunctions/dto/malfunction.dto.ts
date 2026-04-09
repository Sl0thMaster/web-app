import { ApiProperty } from '@nestjs/swagger';

export class CreateMalfunctionDto {
  @ApiProperty({ example: 'Повреждение переднего крыла', description: 'Вид неисправности' })
  name: string;
  @ApiProperty({ example: '10.000 руб.', description: 'Стоимость' })
  price: string;
}
