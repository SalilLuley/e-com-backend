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
import { CartItemReqDto } from 'src/domain/dto/cart-item/cart-item-req-dto';
import { UpdateCartItemReqDto } from 'src/domain/dto/cart-item/cart-item-req-update-dto';
import { CartItemResDto } from 'src/domain/dto/cart-item/cart-item-res-dto';

import { Roles } from 'src/infrastructure/common/decorators/roles.decorator';
import { ROLES } from 'src/infrastructure/common/enum/roles.enum';
import { AccessTokenGuard } from 'src/infrastructure/guards/auth/accessToken.guard';
import { RolesGuard } from 'src/infrastructure/guards/roles.guard';
import { CartItemUsecase } from 'src/use-cases/cart-item/cart-item.usecase';

@Controller('cart-item')
@ApiTags('Cart Item')
@UseGuards(AccessTokenGuard, RolesGuard)
export class CartItemController {
  constructor(private usecase: CartItemUsecase) {}

  @Get('get-all')
  @ApiBearerAuth()
  @Roles(ROLES.ADMIN)
  async getAll(): Promise<IResponse<CartItemResDto[]>> {
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
    @Body() dto: CartItemReqDto,
  ): Promise<IResponse<CartItemResDto>> {
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
    @Body() dto: UpdateCartItemReqDto,
  ): Promise<IResponse<CartItemResDto>> {
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
  ): Promise<IResponse<CartItemResDto>> {
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
  ): Promise<IResponse<CartItemResDto>> {
    try {
      return await this.usecase.getOne(id);
    } catch (error) {
      throw error;
    }
  }
}
