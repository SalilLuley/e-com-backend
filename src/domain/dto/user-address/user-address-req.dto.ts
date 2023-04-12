import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@Injectable()
export class UserAddressReqDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsOptional()
  readonly addressLine1: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsOptional()
  readonly addressLine2: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsOptional()
  readonly city: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsOptional()
  readonly postalCode: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsOptional()
  readonly country: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsOptional()
  readonly telephone: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsOptional()
  readonly mobile: string;
}
