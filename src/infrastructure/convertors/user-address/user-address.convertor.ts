import { Injectable } from '@nestjs/common';
import { UserAddressReqDto } from 'src/domain/dto/user-address/user-address-req.dto';
import { UserAddressResDto } from 'src/domain/dto/user-address/user-address-res.dto';
import { UserAddressEntity } from 'src/domain/entities/user-address/user-address.entity';

@Injectable()
export class UserAddressConvertor {
  toUserAddressResDtoFromEntity(data: UserAddressEntity): UserAddressResDto {
    return { ...data };
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
}
