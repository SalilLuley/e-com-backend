import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserLoginInfoEntity } from 'src/domain';
import { IDataServices } from 'src/domain/abstracts';
import { IResponse } from 'src/domain/common/response.interface';
import { RefreshTokenResDto } from 'src/domain/dto/auth/refresh-token-dto.class';
import { MESSAGES } from 'src/infrastructure/common';
import { UserDtoConvertor } from 'src/infrastructure/convertors/user/user-dto.convertor';
import { BcryptService } from 'src/infrastructure/frameworks/bcrypt/bcrypt.service';
import { JWTDataService } from 'src/infrastructure/frameworks/jwt/jwt.dataservice';

@Injectable()
export class RefreshTokenUsecase {
  /**
   *
   */
  constructor(
    private userDtoConvertor: UserDtoConvertor,
    private databaseService: IDataServices,
    private bcryptService: BcryptService,
    private jwtDataService: JWTDataService,
  ) {}

  async refreshToken(
    id: number,
    rToken: string,
  ): Promise<IResponse<RefreshTokenResDto>> {
    const userLoginInfoEntity: UserLoginInfoEntity =
      await this.databaseService.users.get<UserLoginInfoEntity>({
        userLoginInfoId: id,
      });

    const isEqualRefreshToken = await this.bcryptService.compare(
      rToken,
      userLoginInfoEntity.refreshToken ?? '',
    );
    if (!isEqualRefreshToken) throw new ForbiddenException('Access Denied');

    const token = await this.jwtDataService.generateToken(
      userLoginInfoEntity.userLoginInfoId,
      userLoginInfoEntity.role,
    );

    const refreshToken = await this.jwtDataService.generateRefreshToken(
      userLoginInfoEntity.userLoginInfoId,
    );

    const data: RefreshTokenResDto =
      this.userDtoConvertor.toRefreshTokenResDtoFromRefreshToken(
        token,
        refreshToken,
      );
    return {
      data,
      message: MESSAGES.REFRESH_TOKEN.SUCCESS,
    };
  }
}
