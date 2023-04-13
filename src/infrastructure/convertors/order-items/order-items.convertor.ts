import { Injectable } from '@nestjs/common';
import { OrderItemsReqDto } from 'src/domain/dto/order-items/order-items-req-dto';
import { UpdateOrderItemsReqDto } from 'src/domain/dto/order-items/order-items-req-update-dto';
import { OrderItemsResDto } from 'src/domain/dto/order-items/order-items-res-dto';
import { OrderItemsEntity } from 'src/domain/entities/order-items/order-items.entity';

@Injectable()
export class OrderItemsConvertor {
  toResDtoFromEntity(entity: OrderItemsEntity): OrderItemsResDto {
    return { ...entity };
  }

  toResDtoFromEntities(entity: OrderItemsEntity[]): OrderItemsResDto[] {
    return entity.map((item) => ({ ...item }));
  }

  toModelFromDto(dto: OrderItemsReqDto): OrderItemsEntity {
    return {
      ...dto,
    };
  }

  toUpdateModelFromDto(dto: UpdateOrderItemsReqDto): OrderItemsEntity {
    return {
      ...dto,
      id: undefined,
      updatedAt: new Date(),
    };
  }
}
