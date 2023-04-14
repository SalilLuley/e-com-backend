import { OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IDataServices, IGenericRepository } from 'src/domain/abstracts';
import { UserLoginInfoModel } from '../sql/model/user.model';
import { Model } from 'mongoose';
import { MongoGenericRepository } from './mongo-generic-repository';
import { UserLoginInfoEntity } from 'src/domain';
import { ProfileUserEntity } from 'src/domain/entities/profile-user/profile-user.entity';
import { ProfileEntity } from 'src/domain/entities/profile/profile.entity';
import { UserAddressEntity } from 'src/domain/entities/user-address/user-address.entity';
import { ProductEntity } from 'src/domain/entities/product/product.entity';
import { ProductCategoryEntity } from 'src/domain/entities/product-category/product-category.entity';
import { ProductInventoryEntity } from 'src/domain/entities/product-inventory/product-inventory.entity';
import { DiscountEntity } from 'src/domain/entities/discount/discount.entity';
import { OrderItemsEntity } from 'src/domain/entities/order-items/order-items.entity';
import { CartItemEntity } from 'src/domain/entities/cart-item/cart-item.entity';
import { OrderDetailsEntity } from 'src/domain/entities/order-details/order-details.entity';
import { UserPaymentEntity } from 'src/domain/entities/user-payment/user-payment.entity';

export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  users: IGenericRepository<UserLoginInfoEntity>;
  profileUser: IGenericRepository<ProfileUserEntity>;
  profile: IGenericRepository<ProfileEntity>;
  userAddress: IGenericRepository<UserAddressEntity>;
  product: IGenericRepository<ProductEntity>;
  productCategory: IGenericRepository<ProductCategoryEntity>;
  productInventory: IGenericRepository<ProductInventoryEntity>;

  constructor(
    @InjectModel(UserLoginInfoEntity.name)
    private userLoginInfoModel: Model<UserLoginInfoModel>,
  ) {}
  userPayment: IGenericRepository<UserPaymentEntity>;
  orderDetails: IGenericRepository<OrderDetailsEntity>;
  cartItem: IGenericRepository<CartItemEntity>;
  orderItems: IGenericRepository<OrderItemsEntity>;
  discount: IGenericRepository<DiscountEntity>;

  onApplicationBootstrap() {
    this.users = new MongoGenericRepository<UserLoginInfoEntity>(
      this.userLoginInfoModel,
    );
  }
}
