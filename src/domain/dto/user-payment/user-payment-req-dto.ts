import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class UserPaymentReqDto {
  @ApiProperty({ required: true })
  @IsNumber()
  readonly userLoginInfoId: number;

  @ApiProperty({ required: true })
  @IsString()
  readonly paymentType: string;

  @ApiProperty({ required: true })
  @IsString()
  readonly provider: string;

  @ApiProperty({ required: true })
  @IsNumber()
  readonly accountNo: number;

  @ApiProperty({ required: true })
  @IsString()
  readonly expiry: string;
}
