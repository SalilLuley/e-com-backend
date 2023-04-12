import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserLoginInfoEntity } from 'src/domain';
import { RequestWithUser } from 'src/domain/common/request.interface';
import { UserAddressReqDto } from 'src/domain/dto/user-address/user-address-req.dto';
import { AccessTokenGuard } from 'src/infrastructure/guards/auth/accessToken.guard';
import { UserAddressUsecase } from 'src/use-cases/user-address/user-address.usecase';

@Controller('userAddress')
@ApiTags('UserController')
@UseGuards(AccessTokenGuard)
export class UserAddressController {
  constructor(private userAddressUsecase: UserAddressUsecase) {}

  @Post()
  @ApiBearerAuth()
  async create(
    @Request() request: RequestWithUser,
    @Body() userAddressReqDto: UserAddressReqDto,
  ) {
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
