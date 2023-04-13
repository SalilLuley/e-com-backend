import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RequestWithUser } from 'src/domain/common/request.interface';
import { IResponse } from 'src/domain/common/response.interface';
import { ProductReqDto } from 'src/domain/dto/product/product-req-dto';
import { ProductReqUpdateDto } from 'src/domain/dto/product/product-req-update-dto';
import { ProductResDto } from 'src/domain/dto/product/product-res-dto';
import { Roles } from 'src/infrastructure/common/decorators/roles.decorator';
import { ROLES } from 'src/infrastructure/common/enum/roles.enum';
import { AccessTokenGuard } from 'src/infrastructure/guards/auth/accessToken.guard';
import { RolesGuard } from 'src/infrastructure/guards/roles.guard';
import { ProductUsecase } from 'src/use-cases/product/product.usecase';

@Controller('product')
@ApiTags('Product')
@UseGuards(AccessTokenGuard, RolesGuard)
export class ProductController {
  constructor(private productUsecase: ProductUsecase) {}

  @Get('get')
  @ApiBearerAuth()
  @Roles(ROLES.ADMIN, ROLES.USER)
  async getProductById(): Promise<IResponse<ProductResDto[]>> {
    try {
      return await this.productUsecase.getAllProduct();
    } catch (error) {
      throw error;
    }
  }

  @Post('create')
  @ApiBearerAuth()
  @Roles(ROLES.ADMIN)
  async create(
    @Body() productReqDto: ProductReqDto,
  ): Promise<IResponse<ProductResDto>> {
    try {
      return await this.productUsecase.create(productReqDto);
    } catch (error) {
      throw error;
    }
  }

  @Patch('update')
  @ApiBearerAuth()
  @Roles(ROLES.ADMIN)
  async update(
    @Body() productReqUpdateDto: ProductReqUpdateDto,
  ): Promise<IResponse<ProductResDto>> {
    try {
      return await this.productUsecase.update(productReqUpdateDto);
    } catch (error) {
      throw error;
    }
  }

  @Delete('delete/:id')
  @ApiBearerAuth()
  @Roles(ROLES.ADMIN)
  async delete(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<IResponse<ProductResDto>> {
    try {
      return await this.productUsecase.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
