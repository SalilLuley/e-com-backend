import { Module } from '@nestjs/common';
import { ProductCategoryUsecase } from './product-category/product-category.usecase';
import { ConvertorsModule } from 'src/infrastructure/convertors/convertors.module';
import { DataServicesModule } from 'src/infrastructure/services/data-services/data-service.module';
import { ProductInventoryUsecase } from './product-inventory/product-inventory.usecase';
import { LoginUsecaseModule } from './auth/auth.module';
import { ProductUsecaseModule } from './product/product.module';
import { UserAddressUsecaseModule } from './user-address/user-address.module';
import { UserUsecaseModule } from './user/user.module';
import { DiscountUsecaseModule } from './discount/discount.module';

@Module({
  imports: [DataServicesModule, ConvertorsModule],
  providers: [
    ProductCategoryUsecase,
    ProductInventoryUsecase,
    DiscountUsecaseModule,
  ],
  exports: [
    ProductCategoryUsecase,
    ProductInventoryUsecase,
    DiscountUsecaseModule,
  ],
})
export class UseCasesModule {}
