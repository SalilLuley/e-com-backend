import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { OrderItemsReqDto } from './order-items-req-dto';

export class UpdateOrderItemsReqDto extends OrderItemsReqDto {
  @ApiProperty({ required: false })
  @IsNumber()
  readonly id: number;
}
