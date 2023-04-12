import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/domain/abstracts';
import { IResponse } from 'src/domain/common/response.interface';
import { UserAddressReqDto } from 'src/domain/dto/user-address/user-address-req.dto';
import { UserAddressResDto } from 'src/domain/dto/user-address/user-address-res.dto';
import { UserAddressEntity } from 'src/domain/entities/user-address/user-address.entity';
import { MESSAGES } from 'src/infrastructure/common';
import { UserAddressConvertor } from 'src/infrastructure/convertors/user-address/user-address.convertor';

@Injectable()
export class UserAddressUsecase {
  constructor(
    private databaseService: IDataServices,
    private userConvertor: UserAddressConvertor,
  ) {}

  async create(
    userId: number,
    userAddressReqDto: UserAddressReqDto,
  ): Promise<IResponse<UserAddressResDto>> {
    try {
      const userAddressEntity: UserAddressEntity =
        this.userConvertor.toUserAddressModelFromDto(userId, userAddressReqDto);
      const entity: UserAddressEntity =
        await this.databaseService.userAddress.create(userAddressEntity);

      const data: UserAddressResDto =
        this.userConvertor.toUserAddressResDtoFromEntity(entity);

      return {
        data,
        message: MESSAGES.USER_ADDRESS.CREATE.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async getUserAddress(
    userId: number,
  ): Promise<IResponse<UserAddressResDto[]>> {
    try {
      const entities: UserAddressEntity[] =
        await this.databaseService.userAddress.getAllByProperties({
          userLoginInfoId: userId,
        });

      const data: UserAddressResDto[] =
        this.userConvertor.toUserAddressResDtoFromEntities(entities);

      return {
        data,
        message: MESSAGES.USER_ADDRESS.GET.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }
}
