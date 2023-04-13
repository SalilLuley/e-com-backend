import { Module } from '@nestjs/common';
import { UserDtoConvertor } from './user/user-dto.convertor';
import { AuthDtoConvertor } from './auth/auth-dto.convertor';
import { ProfileDtoConvertor } from './profile/profile-dto.convertor';
import { ProfileUserConvertor } from './profile-user/profile-user.convertor';
import { UserAddressConvertor } from './user-address/user-address.convertor';
import { ProductConvertor } from './product/product.convertor';
import { ProductCategoryConvertor } from './product-category/product-category.convertor';
import { ProductInventoryConvertor } from './product-inventory/product-inventory.convertor';
import { DiscountConvertor } from './discount/discount.convertor';
import { OrderItemsConvertor } from './order-items/order-items.convertor';

@Module({
  providers: [
    UserDtoConvertor,
    AuthDtoConvertor,
    ProfileDtoConvertor,
    ProfileUserConvertor,
    UserAddressConvertor,
    ProductConvertor,
    ProductCategoryConvertor,
    ProductInventoryConvertor,
    DiscountConvertor,
    OrderItemsConvertor,
  ],
  exports: [
    UserDtoConvertor,
    AuthDtoConvertor,
    ProfileDtoConvertor,
    ProfileUserConvertor,
    UserAddressConvertor,
    ProductConvertor,
    ProductCategoryConvertor,
    ProductInventoryConvertor,
    DiscountConvertor,
    OrderItemsConvertor,
  ],
})
export class ConvertorsModule {}
