import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { OrderDetailsReqDto } from './order-details-req-dto';

export class UpdateOrderDetailsReqDto extends OrderDetailsReqDto {
  @ApiProperty({ required: false })
  @IsNumber()
  readonly id: number;
}
