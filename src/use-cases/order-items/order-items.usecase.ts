import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/domain/abstracts';
import { IResponse } from 'src/domain/common/response.interface';
import { OrderItemsReqDto } from 'src/domain/dto/order-items/order-items-req-dto';
import { UpdateOrderItemsReqDto } from 'src/domain/dto/order-items/order-items-req-update-dto';
import { OrderItemsResDto } from 'src/domain/dto/order-items/order-items-res-dto';
import { OrderItemsEntity } from 'src/domain/entities/order-items/order-items.entity';
import { MESSAGES } from 'src/infrastructure/common';
import { OrderItemsConvertor } from 'src/infrastructure/convertors/order-items/order-items.convertor';

@Injectable()
export class OrderItemsUsecase {
  constructor(
    private databaseService: IDataServices,
    private convertor: OrderItemsConvertor,
  ) {}

  async create(dto: OrderItemsReqDto): Promise<IResponse<OrderItemsResDto>> {
    try {
      const orderItemsEntity: OrderItemsEntity =
        this.convertor.toModelFromDto(dto);
      const entity: OrderItemsEntity =
        await this.databaseService.orderItems.create(orderItemsEntity);
      const data: OrderItemsResDto = this.convertor.toResDtoFromEntity(entity);
      return {
        data,
        message: MESSAGES.ORDER_ITEMS.CREATE.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<IResponse<OrderItemsResDto[]>> {
    try {
      const entities: OrderItemsEntity[] =
        await this.databaseService.orderItems.getAll();

      const data: OrderItemsResDto[] =
        this.convertor.toResDtoFromEntities(entities);

      return {
        data,
        message: MESSAGES.ORDER_ITEMS.GET.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async update(
    dto: UpdateOrderItemsReqDto,
  ): Promise<IResponse<OrderItemsResDto>> {
    try {
      const { id } = dto;
      const entity: OrderItemsEntity = this.convertor.toUpdateModelFromDto(dto);
      await this.databaseService.orderItems.update(id, entity);
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
      await this.databaseService.orderItems.delete(id);
      return {
        data: null,
        message: MESSAGES.ORDER_ITEMS.DELETE.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async getOne(id: number): Promise<IResponse<OrderItemsResDto>> {
    try {
      const data: OrderItemsEntity = await this.databaseService.orderItems.get(
        id,
      );
      return {
        data,
        message: MESSAGES.USER_ADDRESS.GET.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }
}
