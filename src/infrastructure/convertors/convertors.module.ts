import { Module } from '@nestjs/common';
import { UserDtoConvertor } from './user/user-dto.convertor';
import { AuthDtoConvertor } from './auth/auth-dto.convertor';
import { ProfileDtoConvertor } from './profile/profile-dto.convertor';
import { ProfileUserConvertor } from './profile-user/profile-user.convertor';
import { UserAddressConvertor } from './user-address/user-address.convertor';

@Module({
  providers: [
    UserDtoConvertor,
    AuthDtoConvertor,
    ProfileDtoConvertor,
    ProfileUserConvertor,
    UserAddressConvertor,
  ],
  exports: [
    UserDtoConvertor,
    AuthDtoConvertor,
    ProfileDtoConvertor,
    ProfileUserConvertor,
    UserAddressConvertor,
  ],
})
export class ConvertorsModule {}
