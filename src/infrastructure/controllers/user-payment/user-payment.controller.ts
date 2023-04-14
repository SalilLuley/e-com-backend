import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IResponse } from 'src/domain/common/response.interface';
import { UserPaymentReqDto } from 'src/domain/dto/user-payment/user-payment-req-dto';
import { UpdateUserPaymentReqDto } from 'src/domain/dto/user-payment/user-payment-req-update-dto';
import { UserPaymentResDto } from 'src/domain/dto/user-payment/user-payment-res-dto';

import { Roles } from 'src/infrastructure/common/decorators/roles.decorator';
import { ROLES } from 'src/infrastructure/common/enum/roles.enum';
import { AccessTokenGuard } from 'src/infrastructure/guards/auth/accessToken.guard';
import { RolesGuard } from 'src/infrastructure/guards/roles.guard';
import { UserPaymentUsecase } from 'src/use-cases/user-payment/user-payment.usecase';

@Controller('user-payment')
@ApiTags('User Payment')
@UseGuards(AccessTokenGuard, RolesGuard)
export class UserPaymentController {
  constructor(private usecase: UserPaymentUsecase) {}

  @Get('get-all')
  @ApiBearerAuth()
  @Roles(ROLES.ADMIN)
  async getAll(): Promise<IResponse<UserPaymentResDto[]>> {
    try {
      return await this.usecase.getAll();
    } catch (error) {
      throw error;
    }
  }

  @Post('create')
  @ApiBearerAuth()
  @Roles(ROLES.ADMIN)
  async create(
    @Body() dto: UserPaymentReqDto,
  ): Promise<IResponse<UserPaymentResDto>> {
    try {
      return await this.usecase.create(dto);
    } catch (error) {
      throw error;
    }
  }

  @Patch('update')
  @ApiBearerAuth()
  @Roles(ROLES.ADMIN)
  async update(
    @Body() dto: UpdateUserPaymentReqDto,
  ): Promise<IResponse<UserPaymentResDto>> {
    try {
      return await this.usecase.update(dto);
    } catch (error) {
      throw error;
    }
  }

  @Delete('delete/:id')
  @ApiBearerAuth()
  @Roles(ROLES.ADMIN)
  async delete(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<IResponse<UserPaymentResDto>> {
    try {
      return await this.usecase.delete(id);
    } catch (error) {
      throw error;
    }
  }

  @Get('get-one/:id')
  @ApiBearerAuth()
  @Roles(ROLES.ADMIN)
  async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<IResponse<UserPaymentResDto>> {
    try {
      return await this.usecase.getOne(id);
    } catch (error) {
      throw error;
    }
  }
}
