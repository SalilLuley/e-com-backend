import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthLoginReqDto } from '../../../domain/dto';
import { IResponse } from 'src/domain/common/response.interface';
import { LoginUsecase } from 'src/use-cases/auth/login.usecase';
import { LogoutUsecase } from 'src/use-cases/auth/logout.usecase';
import { AccessTokenGuard } from 'src/infrastructure/guards/auth/accessToken.guard';
import { RefreshTokenGuard } from 'src/infrastructure/guards/auth/refreshToken.guard';
import { RefreshTokenUsecase } from 'src/use-cases/auth/refresh-token.usecase';
import { RefreshTokenResDto } from 'src/domain/dto/auth/refresh-token-dto.class';
import { AuthLoginResDto } from '../../../domain/dto/auth/auth-res-dto.class';
import { RefreshTokenUpdateInterceptor } from 'src/infrastructure/interceptors/refresh-token-update.interceptor';
import { MESSAGES } from 'src/infrastructure/common';
import { RequestWithUser } from 'src/domain/common/request.interface';
import { ApiResponseOk } from 'src/infrastructure/swagger/response.decorator';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(
    private loginUsecase: LoginUsecase,
    private logoutUsecase: LogoutUsecase,
    private refreshTokenUsecase: RefreshTokenUsecase,
  ) {}

  @Post('login')
  @UseInterceptors(RefreshTokenUpdateInterceptor)
  async loginIn(
    @Body() authLoginReqDto: AuthLoginReqDto,
  ): Promise<IResponse<AuthLoginResDto>> {
    try {
      return await this.loginUsecase.login(authLoginReqDto);
    } catch (error) {
      throw error;
    }
  }

  @Post('logout')
  @ApiBearerAuth()
  @UseGuards(AccessTokenGuard)
  async logout(@Request() request: RequestWithUser): Promise<IResponse<null>> {
    try {
      const {
        user: { userLoginInfoId },
      } = request;
      await this.logoutUsecase.logout(userLoginInfoId);
      return {
        data: null,
        message: MESSAGES.LOGOUT.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  @Get('refresh')
  @ApiBearerAuth()
  @UseGuards(RefreshTokenGuard)
  @UseInterceptors(RefreshTokenUpdateInterceptor)
  refreshToken(
    @Request() request: RequestWithUser,
  ): Promise<IResponse<RefreshTokenResDto>> {
    try {
      const {
        user: { userLoginInfoId, refreshToken },
      } = request;
      return this.refreshTokenUsecase.refreshToken(
        userLoginInfoId,
        refreshToken,
      );
    } catch (error) {
      throw error;
    }
  }
}
