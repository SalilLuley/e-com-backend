import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsIn, IsNumber, IsOptional, IsString } from 'class-validator';
import { ROLES } from 'src/infrastructure/common/enum/roles.enum';

export class UserLoginInfoReqDTO {
  @ApiProperty({ required: true })
  @IsString()
  readonly username: string;

  @ApiProperty({ required: true })
  @IsString()
  readonly firstname: string;

  @ApiProperty({ required: true })
  @IsString()
  readonly lastname: string;

  @ApiProperty({ required: true })
  @IsString()
  readonly password: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsEnum(ROLES)
  readonly role: string;
}