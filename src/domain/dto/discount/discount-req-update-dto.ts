import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { DiscountReqDto } from './discount-req-dto';

export class UpdateDiscountReqDto extends DiscountReqDto {
  @ApiProperty({ required: false })
  @IsNumber()
  readonly id: number;
}
