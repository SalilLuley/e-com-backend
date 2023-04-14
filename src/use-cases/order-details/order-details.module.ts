import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/infrastructure/services/data-services/data-service.module';
import { ConvertorsModule } from 'src/infrastructure/convertors/convertors.module';
import { OrderDetailsUsecase } from './order-details.usecase';

@Module({
  imports: [DataServicesModule, ConvertorsModule],
  providers: [OrderDetailsUsecase],
  exports: [OrderDetailsUsecase],
})
export class OrderDetailsUsecaseModule {}
