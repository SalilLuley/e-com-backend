import { Module } from '@nestjs/common';
import { ProductCategoryUsecase } from './product-category/product-category.usecase';
import { ConvertorsModule } from 'src/infrastructure/convertors/convertors.module';
import { DataServicesModule } from 'src/infrastructure/services/data-services/data-service.module';
import { ProductInventoryUsecase } from './product-inventory/product-inventory.usecase';
import { DiscountUsecaseModule } from './discount/discount.module';
import { OrderItemsUsecaseModule } from './order-items/order-items.module';
import { CartItemUsecaseModule } from './cart-item/cart-item.module';
import { OrderDetailsUsecaseModule } from './order-details/order-details.module';
import { UserPaymentUsecaseModule } from './user-payment/user-payment.module';

@Module({
  imports: [DataServicesModule, ConvertorsModule],
  providers: [
    ProductCategoryUsecase,
    ProductInventoryUsecase,
    DiscountUsecaseModule,
    OrderItemsUsecaseModule,
    CartItemUsecaseModule,
    OrderDetailsUsecaseModule,
    UserPaymentUsecaseModule,
  ],
  exports: [
    ProductCategoryUsecase,
    ProductInventoryUsecase,
    DiscountUsecaseModule,
    OrderItemsUsecaseModule,
    CartItemUsecaseModule,
    OrderDetailsUsecaseModule,
    UserPaymentUsecaseModule,
  ],
})
export class UseCasesModule {}
