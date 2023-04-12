import { Module } from '@nestjs/common';
import { UserDtoConvertor } from './user/user-dto.convertor';
import { AuthDtoConvertor } from './auth/auth-dto.convertor';
import { ProfileDtoConvertor } from './profile/profile-dto.convertor';
import { ProfileUserConvertor } from './profile-user/profile-user.convertor';

@Module({
  providers: [
    UserDtoConvertor,
    AuthDtoConvertor,
    ProfileDtoConvertor,
    ProfileUserConvertor,
  ],
  exports: [
    UserDtoConvertor,
    AuthDtoConvertor,
    ProfileDtoConvertor,
    ProfileUserConvertor,
  ],
})
export class ConvertorsModule {}
