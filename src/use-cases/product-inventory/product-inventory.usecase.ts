import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/domain/abstracts';
import { IResponse } from 'src/domain/common/response.interface';
import { ProductInventoryReqDto } from 'src/domain/dto/product-inventory/product-inventory-req-dto';
import { UpdateProductInventoryCategoryReqDto } from 'src/domain/dto/product-inventory/product-inventory-req-update-dto';
import { ProductInventoryResDto } from 'src/domain/dto/product-inventory/product-inventory-res-dto';
import { ProductInventoryEntity } from 'src/domain/entities/product-inventory/product-inventory.entity';

import { MESSAGES } from 'src/infrastructure/common';
import { ProductInventoryConvertor } from 'src/infrastructure/convertors/product-inventory/product-inventory.convertor';

@Injectable()
export class ProductInventoryUsecase {
  constructor(
    private databaseService: IDataServices,
    private convertor: ProductInventoryConvertor,
  ) {}

  async create(
    dto: ProductInventoryReqDto,
  ): Promise<IResponse<ProductInventoryResDto>> {
    try {
      const productInventoryEntity: ProductInventoryEntity =
        this.convertor.toProductModelFromDto(dto);
      const entity: ProductInventoryEntity =
        await this.databaseService.productInventory.create(
          productInventoryEntity,
        );
      const data: ProductInventoryResDto =
        this.convertor.toProductResDtoFromEntity(entity);
      return {
        data,
        message: MESSAGES.PRODUCT_CATEGORY.CREATE.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<IResponse<ProductInventoryResDto[]>> {
    try {
      const entities: ProductInventoryEntity[] =
        await this.databaseService.productInventory.getAll();

      const data: ProductInventoryResDto[] =
        this.convertor.toProductResDtoFromEntities(entities);

      return {
        data,
        message: MESSAGES.PRODUCT_CATEGORY.GET.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async update(
    dto: UpdateProductInventoryCategoryReqDto,
  ): Promise<IResponse<ProductInventoryResDto>> {
    try {
      const { id } = dto;

      const productEntity: ProductInventoryEntity =
        this.convertor.toUpdateProductModelFromDto(dto);

      await this.databaseService.productInventory.update(id, productEntity);

      return {
        data: null,
        message: MESSAGES.PRODUCT_CATEGORY.UPDATE.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<IResponse<null>> {
    try {
      await this.databaseService.productInventory.delete(id);
      return {
        data: null,
        message: MESSAGES.PRODUCT_CATEGORY.DELETE.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async getOne(id: number): Promise<IResponse<ProductInventoryResDto>> {
    try {
      const data: ProductInventoryEntity =
        await this.databaseService.productInventory.get(id);
      return {
        data,
        message: MESSAGES.USER_ADDRESS.GET.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }
}
