import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

@Injectable()
export class UserAddressResDto {
  @ApiProperty({ required: false })
  @IsNumber()
  readonly id?: number;

  @ApiProperty({ required: true })
  @IsString()
  readonly addressLine1: string;

  @ApiProperty({ required: true })
  @IsString()
  readonly addressLine2: string;

  @ApiProperty({ required: true })
  @IsString()
  readonly city: string;

  @ApiProperty({ required: true })
  @IsString()
  readonly postalCode: string;

  @ApiProperty({ required: true })
  @IsString()
  readonly country: string;

  @ApiProperty({ required: true })
  @IsString()
  readonly telephone: string;

  @ApiProperty({ required: true })
  @IsString()
  readonly mobile: string;
}
