import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserLoginInfoReqDTO } from 'src/domain';
import { RequestWithUser } from 'src/domain/common/request.interface';
import { UpdateProfileUserLoginInfoReqDTO } from 'src/domain/dto/user/user-req-update-profile.dto';
import { Roles } from 'src/infrastructure/common/decorators/roles.decorator';
import { ROLES } from 'src/infrastructure/common/enum/roles.enum';
import { AccessTokenGuard } from 'src/infrastructure/guards/auth/accessToken.guard';
import { RolesGuard } from 'src/infrastructure/guards/roles.guard';
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
  @ApiBearerAuth()
  @Roles(ROLES.ADMIN)
  @UseInterceptors(RefreshTokenUpdateInterceptor)
  async saveUser(@Body() userLoginInfoReqDTO: UserLoginInfoReqDTO) {
    try {
      return await this.userUsecase.create(userLoginInfoReqDTO);
    } catch (error) {
      throw error;
    }
  }

  @Patch('update')
  @ApiBearerAuth()
  @Roles(ROLES.USER, ROLES.ADMIN)
  async update(
    @Request() request: RequestWithUser,
    @Body() updateProfileUserLoginInfoReqDTO: UpdateProfileUserLoginInfoReqDTO,
  ) {
    try {
      const {
        user: { userLoginInfoId },
      } = request;
      return await this.userUsecase.update(
        userLoginInfoId,
        updateProfileUserLoginInfoReqDTO,
      );
    } catch (error) {
      throw error;
    }
  }

  @Delete('delete/:id')
  @ApiBearerAuth()
  @Roles(ROLES.ADMIN)
  async delete(@Param('id', ParseIntPipe) userId: number) {
    try {
      return await this.userUsecase.delete(userId);
    } catch (error) {
      throw error;
    }
  }
}
