import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/domain/abstracts';
import { IResponse } from 'src/domain/common/response.interface';
import { DiscountReqDto } from 'src/domain/dto/discount/discount-req-dto';
import { UpdateDiscountReqDto } from 'src/domain/dto/discount/discount-req-update-dto';
import { DiscountResDto } from 'src/domain/dto/discount/discount-res-dto';
import { DiscountEntity } from 'src/domain/entities/discount/discount.entity';
import { MESSAGES } from 'src/infrastructure/common';
import { DiscountConvertor } from 'src/infrastructure/convertors/discount/discount.convertor';

@Injectable()
export class DiscountUsecase {
  constructor(
    private databaseService: IDataServices,
    private convertor: DiscountConvertor,
  ) {}

  async create(dto: DiscountReqDto): Promise<IResponse<DiscountResDto>> {
    try {
      const DiscountEntity: DiscountEntity =
        this.convertor.toProductModelFromDto(dto);
      const entity: DiscountEntity = await this.databaseService.discount.create(
        DiscountEntity,
      );
      const data: DiscountResDto =
        this.convertor.toProductResDtoFromEntity(entity);
      return {
        data,
        message: MESSAGES.DISCOUNT.CREATE.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<IResponse<DiscountResDto[]>> {
    try {
      const entities: DiscountEntity[] =
        await this.databaseService.discount.getAll();

      const data: DiscountResDto[] =
        this.convertor.toProductResDtoFromEntities(entities);

      return {
        data,
        message: MESSAGES.DISCOUNT.GET.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async update(dto: UpdateDiscountReqDto): Promise<IResponse<DiscountResDto>> {
    try {
      const { id } = dto;

      const productEntity: DiscountEntity =
        this.convertor.toUpdateProductModelFromDto(dto);

      await this.databaseService.discount.update(id, productEntity);

      return {
        data: null,
        message: MESSAGES.DISCOUNT.UPDATE.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<IResponse<null>> {
    try {
      await this.databaseService.discount.delete(id);
      return {
        data: null,
        message: MESSAGES.DISCOUNT.DELETE.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }

  async getOne(id: number): Promise<IResponse<DiscountResDto>> {
    try {
      const data: DiscountEntity = await this.databaseService.discount.get(id);
      return {
        data,
        message: MESSAGES.USER_ADDRESS.GET.SUCCESS,
      };
    } catch (error) {
      throw error;
    }
  }
}
