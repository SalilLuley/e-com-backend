import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

import {
  AuthLoginReqDto,
  AuthLoginResDto,
  UserLoginInfoEntity,
} from 'src/domain';
import { IDataServices } from 'src/domain/abstracts';
import { IResponse } from 'src/domain/common/response.interface';
import { MESSAGES } from 'src/infrastructure/common/messages';
import { AuthDtoConvertor } from 'src/infrastructure/convertors/auth/auth-dto.convertor';

import { BcryptService } from 'src/infrastructure/frameworks/bcrypt/bcrypt.service';
import { JWTDataService } from 'src/infrastructure/frameworks/jwt/jwt.dataservice';

@Injectable()
export class LoginUsecase {
  constructor(
    private databaseService: IDataServices,
    private bcryptService: BcryptService,
    private jwtDataService: JWTDataService,
    private authDtoConvertor: AuthDtoConvertor,
  ) {}

  async login(
    authLoginReqDto: AuthLoginReqDto,
  ): Promise<IResponse<AuthLoginResDto>> {
    try {
      const { password, username } = authLoginReqDto;
      const userLoginInfoEntity: UserLoginInfoEntity =
        await this.databaseService.users.get({ username });
      if (userLoginInfoEntity === null)
        throw new NotFoundException(MESSAGES.USER.USER_NOT_FOUND);

      const isEqualPassword: boolean = await this.bcryptService.compare(
        password,
        userLoginInfoEntity.password,
      );

      if (!isEqualPassword) {
        throw new UnauthorizedException(MESSAGES.USER.PASSWORD_NOT_MATCH);
      }

      const token = await this.jwtDataService.generateToken(
        userLoginInfoEntity.userLoginInfoId,
        userLoginInfoEntity.role,
      );

      const refreshToken = await this.jwtDataService.generateRefreshToken(
        userLoginInfoEntity.userLoginInfoId,
      );

      const data: AuthLoginResDto =
        this.authDtoConvertor.toAuthLoginResDtoFromUserLoginInfoEntity(
          userLoginInfoEntity,
          token,
          refreshToken,
        );

      return {
        data,
        message: MESSAGES.LOGIN.SUCCESS,
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
