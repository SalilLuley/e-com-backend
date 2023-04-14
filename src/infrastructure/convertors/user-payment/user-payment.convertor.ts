import { Injectable } from '@nestjs/common';
import { UserPaymentReqDto } from 'src/domain/dto/user-payment/user-payment-req-dto';
import { UpdateUserPaymentReqDto } from 'src/domain/dto/user-payment/user-payment-req-update-dto';
import { UserPaymentResDto } from 'src/domain/dto/user-payment/user-payment-res-dto';
import { UserPaymentEntity } from 'src/domain/entities/user-payment/user-payment.entity';

@Injectable()
export class UserPaymentConvertor {
  toResDtoFromEntity(entity: UserPaymentEntity): UserPaymentResDto {
    return { ...entity };
  }

  toResDtoFromEntities(entity: UserPaymentEntity[]): UserPaymentResDto[] {
    return entity.map((item) => ({ ...item }));
  }

  toModelFromDto(dto: UserPaymentReqDto): UserPaymentEntity {
    return { ...dto };
  }

  toUpdateModelFromDto(dto: UpdateUserPaymentReqDto): UserPaymentEntity {
    return {
      ...dto,
      id: undefined,
    };
  }
}
