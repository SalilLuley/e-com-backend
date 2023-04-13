import { Module } from '@nestjs/common';
import { ProductCategoryUsecase } from './product-category/product-category.usecase';
import { ConvertorsModule } from 'src/infrastructure/convertors/convertors.module';
import { DataServicesModule } from 'src/infrastructure/services/data-services/data-service.module';
import { ProductInventoryUsecase } from './product-inventory/product-inventory.usecase';
import { DiscountUsecaseModule } from './discount/discount.module';
import { OrderItemsUsecaseModule } from './order-items/order-items.module';

@Module({
  imports: [DataServicesModule, ConvertorsModule],
  providers: [
    ProductCategoryUsecase,
    ProductInventoryUsecase,
    DiscountUsecaseModule,
    OrderItemsUsecaseModule,
  ],
  exports: [
    ProductCategoryUsecase,
    ProductInventoryUsecase,
    DiscountUsecaseModule,
    OrderItemsUsecaseModule,
  ],
})
export class UseCasesModule {}
