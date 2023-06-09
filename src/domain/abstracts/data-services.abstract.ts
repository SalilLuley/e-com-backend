import { IGenericRepository } from '.';
import { UserLoginInfoEntity } from '../entities';
import { CartItemEntity } from '../entities/cart-item/cart-item.entity';
import { DiscountEntity } from '../entities/discount/discount.entity';
import { OrderDetailsEntity } from '../entities/order-details/order-details.entity';
import { OrderItemsEntity } from '../entities/order-items/order-items.entity';
import { ProductCategoryEntity } from '../entities/product-category/product-category.entity';
import { ProductInventoryEntity } from '../entities/product-inventory/product-inventory.entity';
import { ProductEntity } from '../entities/product/product.entity';
import { ProfileUserEntity } from '../entities/profile-user/profile-user.entity';
import { ProfileEntity } from '../entities/profile/profile.entity';
import { UserPaymentEntity } from '../entities/user-payment/user-payment.entity';
import { UserAddressEntity } from '../entities/user-address/user-address.entity';

export abstract class IDataServices {
  abstract users: IGenericRepository<UserLoginInfoEntity>;
  abstract profileUser: IGenericRepository<ProfileUserEntity>;
  abstract profile: IGenericRepository<ProfileEntity>;
  abstract userAddress: IGenericRepository<UserAddressEntity>;
  abstract product: IGenericRepository<ProductEntity>;
  abstract productCategory: IGenericRepository<ProductCategoryEntity>;
  abstract productInventory: IGenericRepository<ProductInventoryEntity>;
  abstract discount: IGenericRepository<DiscountEntity>;
  abstract orderItems: IGenericRepository<OrderItemsEntity>;
  abstract cartItem: IGenericRepository<CartItemEntity>;
  abstract orderDetails: IGenericRepository<OrderDetailsEntity>;
  abstract userPayment: IGenericRepository<UserPaymentEntity>;
}
