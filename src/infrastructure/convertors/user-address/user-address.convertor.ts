import { Injectable } from '@nestjs/common';
import { UserAddressReqDto } from 'src/domain/dto/user-address/user-address-req.dto';
import { UserAddressResDto } from 'src/domain/dto/user-address/user-address-res.dto';
import { UserAddressUpdateReqDto } from 'src/domain/dto/user-address/user-address-update-req.dto';
import { UserAddressEntity } from 'src/domain/entities/user-address/user-address.entity';

@Injectable()
export class UserAddressConvertor {
  toUserAddressResDtoFromEntity(data: UserAddressEntity): UserAddressResDto {
    return { ...data };
  }

  toUserAddressResDtoFromEntities(
    data: UserAddressEntity[],
  ): UserAddressResDto[] {
    return data.map((item) => ({ ...item }));
  }

  toUserAddressModelFromDto(
    userId: number,
    userAddressReqDto: UserAddressReqDto,
  ): UserAddressEntity {
    return {
      ...userAddressReqDto,
      userLoginInfoId: userId,
    };
  }

  toUpdateUserAddressModelFromDto(
    userAddressUpdateReqDto: UserAddressUpdateReqDto,
  ): UserAddressEntity {
    return {
      ...userAddressUpdateReqDto,
      userLoginInfoId: undefined,
      id: undefined,
    };
  }
}
