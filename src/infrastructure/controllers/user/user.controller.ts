import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserLoginInfoReqDTO } from 'src/domain';
import { Roles } from 'src/infrastructure/common/decorators/roles.decorator';
import { ROLES } from 'src/infrastructure/common/enum/roles.enum';
import { AccessTokenGuard } from 'src/infrastructure/guards/auth/accessToken.guard';
import { RolesGuard } from 'src/infrastructure/guards/roles.guard';
import { ProfileUpdateInterceptor } from 'src/infrastructure/interceptors/profile-update.interceptor';
import { RefreshTokenUpdateInterceptor } from 'src/infrastructure/interceptors/refresh-token-update.interceptor';
import { UserUsecase } from 'src/use-cases/user/user.usecase';

@Controller('users')
@ApiTags('User')
@UseGuards(AccessTokenGuard, RolesGuard)
export class UserController {
  constructor(private userUsecase: UserUsecase) {}

  @Get('get-all')
  @ApiBearerAuth()
  @Roles(ROLES.ADMIN)
  async getAll() {
    try {
      return await this.userUsecase.getAllUsers();
    } catch (error) {
      throw error;
    }
  }

  @Post('create')
  @Roles(ROLES.ADMIN)
  @UseInterceptors(RefreshTokenUpdateInterceptor)
  async saveUser(@Body() userLoginInfoReqDTO: UserLoginInfoReqDTO) {
    try {
      return await this.userUsecase.create(userLoginInfoReqDTO);
    } catch (error) {
      throw error;
    }
  }
}
