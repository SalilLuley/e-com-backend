import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/infrastructure/services/data-services/data-service.module';
import { ConvertorsModule } from 'src/infrastructure/convertors/convertors.module';
import { ProductInventoryUsecase } from './product-inventory.usecase';

@Module({
  imports: [DataServicesModule, ConvertorsModule],
  providers: [ProductInventoryUsecase],
  exports: [ProductInventoryUsecase],
})
export class ProductInventoryUsecaseModule {}
