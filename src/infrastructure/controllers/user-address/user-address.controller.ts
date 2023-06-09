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
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserLoginInfoEntity } from 'src/domain';
import { RequestWithUser } from 'src/domain/common/request.interface';
import { IResponse } from 'src/domain/common/response.interface';
import { UserAddressReqDto } from 'src/domain/dto/user-address/user-address-req.dto';
import { UserAddressResDto } from 'src/domain/dto/user-address/user-address-res.dto';
import { UserAddressUpdateReqDto } from 'src/domain/dto/user-address/user-address-update-req.dto';
import { Roles } from 'src/infrastructure/common/decorators/roles.decorator';
import { ROLES } from 'src/infrastructure/common/enum/roles.enum';
import { AccessTokenGuard } from 'src/infrastructure/guards/auth/accessToken.guard';
import { RolesGuard } from 'src/infrastructure/guards/roles.guard';
import { UserAddressUsecase } from 'src/use-cases/user-address/user-address.usecase';

@Controller('userAddress')
@ApiTags('User-Address')
@UseGuards(AccessTokenGuard, RolesGuard)
export class UserAddressController {
  constructor(private userAddressUsecase: UserAddressUsecase) {}

  @Get('get-all')
  @ApiBearerAuth()
  @Roles(ROLES.USER)
  async getAddressByUserId(
    @Request() request: RequestWithUser,
  ): Promise<IResponse<UserAddressResDto[]>> {
    try {
      const { userLoginInfoId }: UserLoginInfoEntity = request.user;
      return await this.userAddressUsecase.getUserAddress(userLoginInfoId);
    } catch (error) {
      throw error;
    }
  }

  @Post('create')
  @ApiBearerAuth()
  @Roles(ROLES.USER)
  async create(
    @Request() request: RequestWithUser,
    @Body() userAddressReqDto: UserAddressReqDto,
  ): Promise<IResponse<UserAddressResDto>> {
    try {
      const { userLoginInfoId }: UserLoginInfoEntity = request.user;
      return await this.userAddressUsecase.create(
        userLoginInfoId,
        userAddressReqDto,
      );
    } catch (error) {
      throw error;
    }
  }

  @Patch('update')
  @ApiBearerAuth()
  async update(
    @Request() request: RequestWithUser,
    @Body() userAddressUpdateReqDto: UserAddressUpdateReqDto,
  ): Promise<IResponse<UserAddressResDto>> {
    try {
      const { userLoginInfoId }: UserLoginInfoEntity = request.user;
      return await this.userAddressUsecase.update(userAddressUpdateReqDto);
    } catch (error) {
      throw error;
    }
  }

  @Delete('delete/:id')
  @ApiBearerAuth()
  async delete(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<IResponse<UserAddressResDto>> {
    try {
      return await this.userAddressUsecase.delete(id);
    } catch (error) {
      throw error;
    }
  }

  @Get('get-one/:id')
  @ApiBearerAuth()
  @Roles(ROLES.USER)
  async getOneAddress(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<IResponse<UserAddressResDto>> {
    try {
      return await this.userAddressUsecase.getOneAddress(id);
    } catch (error) {
      throw error;
    }
  }
}
