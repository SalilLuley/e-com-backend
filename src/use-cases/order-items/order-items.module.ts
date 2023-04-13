import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/infrastructure/services/data-services/data-service.module';
import { ConvertorsModule } from 'src/infrastructure/convertors/convertors.module';
import { OrderItemsUsecase } from './order-items.usecase';

@Module({
  imports: [DataServicesModule, ConvertorsModule],
  providers: [OrderItemsUsecase],
  exports: [OrderItemsUsecase],
})
export class OrderItemsUsecaseModule {}
