import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/domain/abstracts';
import { IResponse } from 'src/domain/common/response.interface';
import { OrderDetailsReqDto } from 'src/domain/dto/order-details/order-details-req-dto';
import { UpdateOrderDetailsReqDto } from 'src/domain/dto/order-details/order-details-req-update-dto';
import { OrderDetailsResDto } from 'src/domain/dto/order-details/order-details-res-dto';
import { OrderDetailsEntity } from 'src/domain/entities/order-details/order-details.entity';

import { MESSAGES } from 'src/infrastructure/common';
import { OrderDetailsConvertor } from 'src/infrastructure/convertors/order-details/order-details.convertor';

@Injectable()
export class OrderDetailsUsecase {
  constructor(
    private databaseService: IDataServices,
    private convertor: OrderDetailsConvertor,
  ) {}

  async create(
    dto: OrderDetailsReqDto,
  ): Promise<IResponse<OrderDetailsResDto>> {
    try {
      const orderDetailsEntity: OrderDetailsEntity =
        this.convertor.toModelFromDto(dto);
      const entity: OrderDetailsEntity =
        await this.databaseService.orderDetails.create(orderDetailsEntity);
      const data: OrderDetailsResDto =
        this.convertor.toResDtoFromEntity(entity);
      return {
        data,
        message: MESSAGES.ORDER_ITEMS.CREATE.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<IResponse<OrderDetailsResDto[]>> {
    try {
      const entities: OrderDetailsEntity[] =
        await this.databaseService.orderDetails.getAll();

      const data: OrderDetailsResDto[] =
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
    dto: UpdateOrderDetailsReqDto,
  ): Promise<IResponse<OrderDetailsResDto>> {
    try {
      const { id } = dto;
      const entity: OrderDetailsEntity =
        this.convertor.toUpdateModelFromDto(dto);
      await this.databaseService.orderDetails.update(id, entity);
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
      await this.databaseService.orderDetails.delete(id);
      return {
        data: null,
        message: MESSAGES.ORDER_ITEMS.DELETE.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async getOne(id: number): Promise<IResponse<OrderDetailsResDto>> {
    try {
      const data: OrderDetailsEntity =
        await this.databaseService.orderDetails.get(id);
      return {
        data,
        message: MESSAGES.USER_ADDRESS.GET.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }
}
