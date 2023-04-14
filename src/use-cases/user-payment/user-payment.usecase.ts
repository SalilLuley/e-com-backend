import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/domain/abstracts';
import { IResponse } from 'src/domain/common/response.interface';
import { UserPaymentReqDto } from 'src/domain/dto/user-payment/user-payment-req-dto';
import { UpdateUserPaymentReqDto } from 'src/domain/dto/user-payment/user-payment-req-update-dto';
import { UserPaymentResDto } from 'src/domain/dto/user-payment/user-payment-res-dto';
import { UserPaymentEntity } from 'src/domain/entities/user-payment/user-payment.entity';
import { MESSAGES } from 'src/infrastructure/common';
import { UserPaymentConvertor } from 'src/infrastructure/convertors/user-payment/user-payment.convertor';

@Injectable()
export class UserPaymentUsecase {
  constructor(
    private databaseService: IDataServices,
    private convertor: UserPaymentConvertor,
  ) {}

  async create(dto: UserPaymentReqDto): Promise<IResponse<UserPaymentResDto>> {
    try {
      const userPaymentEntity: UserPaymentEntity =
        this.convertor.toModelFromDto(dto);
      const entity: UserPaymentEntity =
        await this.databaseService.userPayment.create(userPaymentEntity);
      const data: UserPaymentResDto = this.convertor.toResDtoFromEntity(entity);
      return {
        data,
        message: MESSAGES.ORDER_ITEMS.CREATE.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<IResponse<UserPaymentResDto[]>> {
    try {
      const entities: UserPaymentEntity[] =
        await this.databaseService.userPayment.getAll();

      const data: UserPaymentResDto[] =
        this.convertor.toResDtoFromEntities(entities);

      return {
        data,
        message: MESSAGES.ORDER_ITEMS.GET.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async update(
    dto: UpdateUserPaymentReqDto,
  ): Promise<IResponse<UserPaymentResDto>> {
    try {
      const { id } = dto;
      const entity: UserPaymentEntity =
        this.convertor.toUpdateModelFromDto(dto);
      await this.databaseService.userPayment.update(id, entity);
      return {
        data: null,
        message: MESSAGES.ORDER_ITEMS.UPDATE.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<IResponse<null>> {
    try {
      await this.databaseService.userPayment.delete(id);
      return {
        data: null,
        message: MESSAGES.ORDER_ITEMS.DELETE.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async getOne(id: number): Promise<IResponse<UserPaymentResDto>> {
    try {
      const data: UserPaymentEntity =
        await this.databaseService.userPayment.get(id);
      return {
        data,
        message: MESSAGES.USER_ADDRESS.GET.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }
}
