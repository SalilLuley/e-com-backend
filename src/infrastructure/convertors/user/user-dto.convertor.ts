import { Injectable } from '@nestjs/common';
import { UserLoginInfoReqDTO, UserLoginInfoResDTO } from 'src/domain/dto';
import { RefreshTokenResDto } from 'src/domain/dto/auth/refresh-token-dto.class';
import { UserLoginInfoEntity } from 'src/domain/entities';
import { format, parseISO } from 'date-fns';
import { UpdateProfileUserLoginInfoReqDTO } from 'src/domain/dto/user/user-req-update-profile.dto';
import { UpdatePasswordUserLoginInfoReqDTO } from 'src/domain/dto/user/user-req-update-profile.dto copy';

@Injectable()
export class UserDtoConvertor {
  toEntityFromUserLoginInfoReqDTO(
    dto: UserLoginInfoReqDTO,
    hashPassword: string,
  ): UserLoginInfoEntity {
    const { firstname, lastname, username, role } = dto;

    return {
      firstname,
      lastname,
      password: hashPassword,
      username,
      refreshToken: null,
      role,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  toUserLoginInfoResDTOFromEntity(
    entities: UserLoginInfoEntity[],
  ): UserLoginInfoResDTO[] {
    return entities.map(
      ({ firstname, lastname, username, userLoginInfoId, role }) => ({
        firstname,
        lastname,
        username,
        userId: userLoginInfoId,
        role,
      }),
    );
  }

  toUserLoginInfoResDTOForCreate(
    entity: UserLoginInfoEntity,
    token: string,
    refreshToken: string,
  ): UserLoginInfoResDTO {
    const { firstname, lastname, username, userLoginInfoId } = entity;
    return {
      firstname,
      lastname,
      username,
      userId: userLoginInfoId,
      refreshToken,
      token,
    };
  }

  toUserLoginEntityForUpdateRefreshToken(
    refreshToken: string,
  ): UserLoginInfoEntity {
    return {
      refreshToken,
      updatedAt: new Date(), //format(, 'dd-MM-yyyy'),
    };
  }
  toRefreshTokenResDtoFromRefreshToken(
    token: string,
    refreshToken: string,
  ): RefreshTokenResDto {
    return { refreshToken, token };
  }

  toUpdateUserEntityFromDto(
    updateProfileUserLoginInfoReqDTO: UpdateProfileUserLoginInfoReqDTO,
  ): UserLoginInfoEntity {
    return { ...updateProfileUserLoginInfoReqDTO };
  }

  toUserLoginInfoResDTOFromGetMyProfile(
    entity: UserLoginInfoEntity,
  ): UserLoginInfoResDTO {
    const { firstname, lastname, username, userLoginInfoId, role } = entity;
    return {
      firstname,
      lastname,
      username,
      userId: userLoginInfoId,
      role,
    };
  }
  toUpdateUserEntityFromUpdatePasswordDto(
    password: string,
  ): UserLoginInfoEntity {
    return { password };
  }
}
