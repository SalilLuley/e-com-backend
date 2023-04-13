import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class OrderItemsReqDto {
  @ApiProperty({ required: true })
  @IsNumber()
  readonly orderId: number;

  @ApiProperty({ required: true })
  @IsNumber()
  readonly productId: number;

  @ApiProperty({ required: true })
  @IsNumber()
  readonly quantity: number;
}
