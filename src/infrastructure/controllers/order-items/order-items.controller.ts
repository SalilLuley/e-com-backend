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
import { OrderItemsReqDto } from 'src/domain/dto/order-items/order-items-req-dto';
import { UpdateOrderItemsReqDto } from 'src/domain/dto/order-items/order-items-req-update-dto';
import { OrderItemsResDto } from 'src/domain/dto/order-items/order-items-res-dto';
import { Roles } from 'src/infrastructure/common/decorators/roles.decorator';
import { ROLES } from 'src/infrastructure/common/enum/roles.enum';
import { AccessTokenGuard } from 'src/infrastructure/guards/auth/accessToken.guard';
import { RolesGuard } from 'src/infrastructure/guards/roles.guard';
import { OrderItemsUsecase } from 'src/use-cases/order-items/order-items.usecase';

@Controller('order-items')
@ApiTags('Order Items')
@UseGuards(AccessTokenGuard, RolesGuard)
export class OrderItemsController {
  constructor(private usecase: OrderItemsUsecase) {}

  @Get('get-all')
  @ApiBearerAuth()
  @Roles(ROLES.ADMIN)
  async getAll(): Promise<IResponse<OrderItemsResDto[]>> {
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
    @Body() dto: OrderItemsReqDto,
  ): Promise<IResponse<OrderItemsResDto>> {
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
    @Body() dto: UpdateOrderItemsReqDto,
  ): Promise<IResponse<OrderItemsResDto>> {
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
  ): Promise<IResponse<OrderItemsResDto>> {
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
  ): Promise<IResponse<OrderItemsResDto>> {
    try {
      return await this.usecase.getOne(id);
    } catch (error) {
      throw error;
    }
  }
}
