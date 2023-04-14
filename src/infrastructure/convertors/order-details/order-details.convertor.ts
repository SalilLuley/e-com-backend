import { Injectable } from '@nestjs/common';
import { OrderDetailsReqDto } from 'src/domain/dto/order-details/order-details-req-dto';
import { UpdateOrderDetailsReqDto } from 'src/domain/dto/order-details/order-details-req-update-dto';
import { OrderDetailsResDto } from 'src/domain/dto/order-details/order-details-res-dto';
import { OrderDetailsEntity } from 'src/domain/entities/order-details/order-details.entity';

@Injectable()
export class OrderDetailsConvertor {
  toResDtoFromEntity(entity: OrderDetailsEntity): OrderDetailsResDto {
    return { ...entity };
  }

  toResDtoFromEntities(entity: OrderDetailsEntity[]): OrderDetailsResDto[] {
    return entity.map((item) => ({ ...item }));
  }

  toModelFromDto(dto: OrderDetailsReqDto): OrderDetailsEntity {
    return { ...dto };
  }

  toUpdateModelFromDto(dto: UpdateOrderDetailsReqDto): OrderDetailsEntity {
    return {
      ...dto,
      id: undefined,
      updatedAt: new Date(),
    };
  }
}
