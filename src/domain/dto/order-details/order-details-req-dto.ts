import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class OrderDetailsReqDto {
  @ApiProperty({ required: true })
  @IsNumber()
  readonly userLoginInfoId: number;

  @ApiProperty({ required: true })
  @IsNumber()
  readonly total: number;

  @ApiProperty({ required: true })
  @IsNumber()
  readonly paymentId: number;
}
