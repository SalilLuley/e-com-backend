import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class DiscountReqDto {
  @ApiProperty({ required: true })
  @IsString()
  readonly name: string;

  @ApiProperty({ required: true })
  @IsString()
  readonly desc: string;

  @ApiProperty({ required: true })
  @IsNumber()
  readonly discountPercent: number;

  @ApiProperty({ required: true })
  @IsBoolean()
  readonly active: boolean;
}
