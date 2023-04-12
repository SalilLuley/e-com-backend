import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { UserAddressReqDto } from './user-address-req.dto';

@Injectable()
export class UserAddressUpdateReqDto extends UserAddressReqDto {
  @ApiProperty({ required: false })
  @IsNumber()
  readonly id: number;
}
