import {
  Body,
  Controller,
  Get,
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
import { AccessTokenGuard } from 'src/infrastructure/guards/auth/accessToken.guard';
import { UserAddressUsecase } from 'src/use-cases/user-address/user-address.usecase';

@Controller('userAddress')
@ApiTags('UserController')
@UseGuards(AccessTokenGuard)
export class UserAddressController {
  constructor(private userAddressUsecase: UserAddressUsecase) {}

  @Get()
  @ApiBearerAuth()
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

  @Post()
  @ApiBearerAuth()
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
}
