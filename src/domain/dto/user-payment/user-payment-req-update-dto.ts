import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { UserPaymentReqDto } from './user-payment-req-dto';

export class UpdateUserPaymentReqDto extends UserPaymentReqDto {
  @ApiProperty({ required: false })
  @IsNumber()
  readonly id: number;
}
