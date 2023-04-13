import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/infrastructure/services/data-services/data-service.module';
import { ConvertorsModule } from 'src/infrastructure/convertors/convertors.module';
import { ProductCategoryUsecase } from './product-category.usecase';

@Module({
  imports: [DataServicesModule, ConvertorsModule],
  providers: [ProductCategoryUsecase],
  exports: [ProductCategoryUsecase],
})
export class ProductCategoryUsecaseModule {}
