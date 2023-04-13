import { Injectable } from '@nestjs/common';
import { ProductReqDto } from 'src/domain/dto/product/product-req-dto';
import { ProductReqUpdateDto } from 'src/domain/dto/product/product-req-update-dto';
import { ProductResDto } from 'src/domain/dto/product/product-res-dto';

import { ProductEntity } from 'src/domain/entities/product/product.entity';

@Injectable()
export class ProductConvertor {
  toProductResDtoFromEntity(data: ProductEntity): ProductResDto {
    return { ...data };
  }

  toProductResDtoFromEntities(data: ProductEntity[]): ProductResDto[] {
    return data.map((item) => ({ ...item }));
  }

  toProductModelFromDto(productReqDto: ProductReqDto): ProductEntity {
    return {
      ...productReqDto,
    };
  }

  toUpdateProductModelFromDto(
    productReqUpdateDto: ProductReqUpdateDto,
  ): ProductEntity {
    return {
      ...productReqUpdateDto,
      id: undefined,
      updatedAt: new Date(),
    };
  }
}
