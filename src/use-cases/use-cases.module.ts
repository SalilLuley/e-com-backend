import { Module } from '@nestjs/common';
import { ProductCategoryUsecase } from './product-category/product-category.usecase';
import { ConvertorsModule } from 'src/infrastructure/convertors/convertors.module';
import { DataServicesModule } from 'src/infrastructure/services/data-services/data-service.module';

@Module({
  imports: [DataServicesModule, ConvertorsModule],
  providers: [ProductCategoryUsecase],
  exports: [ProductCategoryUsecase],
})
export class UseCasesModule {}
