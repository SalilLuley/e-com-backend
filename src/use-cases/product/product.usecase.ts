import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/domain/abstracts';
import { IResponse } from 'src/domain/common/response.interface';
import { ProductReqDto } from 'src/domain/dto/product/product-req-dto';
import { ProductReqUpdateDto } from 'src/domain/dto/product/product-req-update-dto';
import { ProductResDto } from 'src/domain/dto/product/product-res-dto';
import { ProductEntity } from 'src/domain/entities/product/product.entity';
import { MESSAGES } from 'src/infrastructure/common';
import { ProductConvertor } from 'src/infrastructure/convertors/product/product.convertor';

@Injectable()
export class ProductUsecase {
  constructor(
    private databaseService: IDataServices,
    private productConvertor: ProductConvertor,
  ) {}

  async create(
    productReqDto: ProductReqDto,
  ): Promise<IResponse<ProductResDto>> {
    try {
      const productEntity: ProductEntity =
        this.productConvertor.toProductModelFromDto(productReqDto);
      const entity: ProductEntity = await this.databaseService.product.create(
        productEntity,
      );
      const data: ProductResDto =
        this.productConvertor.toProductResDtoFromEntity(entity);

      return {
        data,
        message: MESSAGES.PRODUCT.CREATE.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async getAllProduct(): Promise<IResponse<ProductResDto[]>> {
    try {
      const entities: ProductEntity[] =
        await this.databaseService.product.getAll();

      const data: ProductResDto[] =
        this.productConvertor.toProductResDtoFromEntities(entities);

      return {
        data,
        message: MESSAGES.PRODUCT.GET.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async update(
    productReqUpdateDto: ProductReqUpdateDto,
  ): Promise<IResponse<ProductResDto>> {
    try {
      const { id } = productReqUpdateDto;

      const productEntity: ProductEntity =
        this.productConvertor.toUpdateProductModelFromDto(productReqUpdateDto);

      await this.databaseService.product.update(id, productEntity);

      return {
        data: null,
        message: MESSAGES.PRODUCT.UPDATE.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<IResponse<ProductResDto>> {
    try {
      await this.databaseService.product.delete(id);
      return {
        data: null,
        message: MESSAGES.PRODUCT.DELETE.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async getOneAddress(id: number): Promise<IResponse<ProductResDto>> {
    try {
      const data = await this.databaseService.product.get(id);
      return {
        data,
        message: MESSAGES.USER_ADDRESS.GET.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }
}
