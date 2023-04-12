import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  UserLoginInfoEntity,
  UserLoginInfoReqDTO,
  UserLoginInfoResDTO,
} from 'src/domain';

import { IDataServices } from 'src/domain/abstracts';
import { IResponse } from 'src/domain/common/response.interface';
import { UserDtoConvertor } from 'src/infrastructure/convertors/user/user-dto.convertor';
import { MESSAGES } from 'src/infrastructure/common';

import { BcryptService } from 'src/infrastructure/frameworks/bcrypt/bcrypt.service';
import { JWTDataService } from 'src/infrastructure/frameworks/jwt/jwt.dataservice';
@Injectable()
export class UserUsecase {
  constructor(
    private databaseService: IDataServices,
    private bcryptService: BcryptService,
    private userDtoConvertor: UserDtoConvertor,
    private jwtDataService: JWTDataService,
  ) {}

  async getAllUsers(): Promise<IResponse<UserLoginInfoResDTO[]>> {
    try {
      const userLoginInfoEntities: UserLoginInfoEntity[] =
        await this.databaseService.users.getAll();
      const data: UserLoginInfoResDTO[] =
        this.userDtoConvertor.toUserLoginInfoResDTOFromEntity(
          userLoginInfoEntities,
        );
      return {
        data,
        message: MESSAGES.USER.GET.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async create(
    userLoginInfoReqDTO: UserLoginInfoReqDTO,
  ): Promise<IResponse<UserLoginInfoResDTO>> {
    const hashPassword: string = await this.bcryptService.hash(
      userLoginInfoReqDTO.password,
    );

    const entity: UserLoginInfoEntity =
      this.userDtoConvertor.toEntityFromUserLoginInfoReqDTO(
        userLoginInfoReqDTO,
        hashPassword,
      );

    const userLoginInfoEntity: UserLoginInfoEntity =
      await this.databaseService.users.create(entity);

    const token = await this.jwtDataService.generateToken(
      userLoginInfoEntity.userLoginInfoId,
      userLoginInfoEntity.role,
    );

    const refreshToken = await this.jwtDataService.generateRefreshToken(
      userLoginInfoEntity.userLoginInfoId,
    );

    const data: UserLoginInfoResDTO =
      this.userDtoConvertor.toUserLoginInfoResDTOForCreate(
        userLoginInfoEntity,
        token,
        refreshToken,
      );

    return {
      data,
      message: MESSAGES.USER.GET.SUCCESS,
    };
  }
}