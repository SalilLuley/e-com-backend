import { Injectable } from '@nestjs/common';
import { AuthLoginResDto, UserLoginInfoEntity } from 'src/domain';

@Injectable()
export class AuthDtoConvertor {
  toAuthLoginResDtoFromUserLoginInfoEntity(
    entity: UserLoginInfoEntity,
    token: string,
    refreshToken: string,
  ): AuthLoginResDto {
    const { userLoginInfoId, username } = entity;
    return {
      token,
      userId: userLoginInfoId,
      username,
      refreshToken,
    };
  }
}
