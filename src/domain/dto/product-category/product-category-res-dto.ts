import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class ProductCategoryResDto {
  @ApiProperty({ required: false })
  @IsNumber()
  readonly id?: number;

  @ApiProperty({ required: true })
  @IsString()
  readonly name: string;

  @ApiProperty({ required: true })
  @IsString()
  readonly desc: string;

  @ApiProperty({ required: true })
  @IsDate()
  readonly createdAt?: Date;

  @ApiProperty({ required: true })
  @IsDate()
  readonly updatedAt?: Date;

  @ApiProperty({ required: true })
  @IsDate()
  readonly deletedAt?: Date;
}
