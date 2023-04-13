import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { BaseDto } from '../base-dto/base.dto';

export class OrderItemsResDto extends BaseDto {
  @ApiProperty({ required: false })
  @IsNumber()
  readonly id?: number;

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
