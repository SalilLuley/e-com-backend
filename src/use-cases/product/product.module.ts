import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/infrastructure/services/data-services/data-service.module';
import { ConvertorsModule } from 'src/infrastructure/convertors/convertors.module';
import { ProductUsecase } from './product.usecase';

@Module({
  imports: [DataServicesModule, ConvertorsModule],
  providers: [ProductUsecase],
  exports: [ProductUsecase],
})
export class ProductUsecaseModule {}
