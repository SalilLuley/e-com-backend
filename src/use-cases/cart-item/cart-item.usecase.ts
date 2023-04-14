import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/domain/abstracts';
import { IResponse } from 'src/domain/common/response.interface';
import { CartItemReqDto } from 'src/domain/dto/cart-item/cart-item-req-dto';
import { UpdateCartItemReqDto } from 'src/domain/dto/cart-item/cart-item-req-update-dto';
import { CartItemResDto } from 'src/domain/dto/cart-item/cart-item-res-dto';

import { CartItemEntity } from 'src/domain/entities/cart-item/cart-item.entity';

import { MESSAGES } from 'src/infrastructure/common';
import { CartItemConvertor } from 'src/infrastructure/convertors/cart-item/cart-item.convertor';

@Injectable()
export class CartItemUsecase {
  constructor(
    private databaseService: IDataServices,
    private convertor: CartItemConvertor,
  ) {}

  async create(dto: CartItemReqDto): Promise<IResponse<CartItemResDto>> {
    try {
      const cartItemEntity: CartItemEntity = this.convertor.toModelFromDto(dto);
      const entity: CartItemEntity = await this.databaseService.cartItem.create(
        cartItemEntity,
      );
      const data: CartItemResDto = this.convertor.toResDtoFromEntity(entity);
      return {
        data,
        message: MESSAGES.ORDER_ITEMS.CREATE.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<IResponse<CartItemResDto[]>> {
    try {
      const entities: CartItemEntity[] =
        await this.databaseService.cartItem.getAll();

      const data: CartItemResDto[] =
        this.convertor.toResDtoFromEntities(entities);

      return {
        data,
        message: MESSAGES.ORDER_ITEMS.GET.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async update(dto: UpdateCartItemReqDto): Promise<IResponse<CartItemResDto>> {
    try {
      const { id } = dto;
      const entity: CartItemEntity = this.convertor.toUpdateModelFromDto(dto);
      await this.databaseService.cartItem.update(id, entity);
      return {
        data: null,
        message: MESSAGES.ORDER_ITEMS.UPDATE.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<IResponse<null>> {
    try {
      await this.databaseService.cartItem.delete(id);
      return {
        data: null,
        message: MESSAGES.ORDER_ITEMS.DELETE.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async getOne(id: number): Promise<IResponse<CartItemResDto>> {
    try {
      const data: CartItemEntity = await this.databaseService.cartItem.get(id);
      return {
        data,
        message: MESSAGES.USER_ADDRESS.GET.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }
}
