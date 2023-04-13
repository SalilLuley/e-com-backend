import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/infrastructure/services/data-services/data-service.module';
import { ConvertorsModule } from 'src/infrastructure/convertors/convertors.module';
import { DiscountUsecase } from './discount.usecase';

@Module({
  imports: [DataServicesModule, ConvertorsModule],
  providers: [DiscountUsecase],
  exports: [DiscountUsecase],
})
export class DiscountUsecaseModule {}
