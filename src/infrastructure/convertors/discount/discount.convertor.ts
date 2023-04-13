import { Injectable } from '@nestjs/common';
import { DiscountReqDto } from 'src/domain/dto/discount/discount-req-dto';
import { UpdateDiscountReqDto } from 'src/domain/dto/discount/discount-req-update-dto';
import { DiscountResDto } from 'src/domain/dto/discount/discount-res-dto';
import { DiscountEntity } from 'src/domain/entities/discount/discount.entity';

@Injectable()
export class DiscountConvertor {
  toProductResDtoFromEntity(entity: DiscountEntity): DiscountResDto {
    return { ...entity };
  }

  toProductResDtoFromEntities(entity: DiscountEntity[]): DiscountResDto[] {
    return entity.map((item) => ({ ...item }));
  }

  toProductModelFromDto(dto: DiscountReqDto): DiscountEntity {
    return {
      ...dto,
    };
  }

  toUpdateProductModelFromDto(dto: UpdateDiscountReqDto): DiscountEntity {
    return {
      ...dto,
      id: undefined,
      updatedAt: new Date(),
    };
  }
}
