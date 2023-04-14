import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { IDataServices, IGenericRepository } from 'src/domain/abstracts';
import { UserLoginInfoModel } from './model/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SQLGenericRepository } from './sql-generic-repository';
import { ProfileUserEntity } from 'src/domain/entities/profile-user/profile-user.entity';
import { ProfileEntity } from 'src/domain/entities/profile/profile.entity';
import { ProfileModel } from './model/profile.model';
import { ProfileUserModel } from './model/profile-user.model';
import { UserAddressEntity } from 'src/domain/entities/user-address/user-address.entity';
import { UserAddressModel } from './model/user-address.model';
import { UserLoginInfoEntity } from 'src/domain';
import { ProductEntity } from 'src/domain/entities/product/product.entity';
import { ProductModel } from './model/product.model';
import { ProductCategoryModel } from './model/product-category.model';
import { ProductCategoryEntity } from 'src/domain/entities/product-category/product-category.entity';
import { ProductInventoryEntity } from 'src/domain/entities/product-inventory/product-inventory.entity';
import { ProductInventoryModel } from './model/product-inventory.model';
import { DiscountEntity } from 'src/domain/entities/discount/discount.entity';
import { DiscountModel } from './model/discount.model';
import { OrderItemsEntity } from 'src/domain/entities/order-items/order-items.entity';
import { OrderItemsModel } from './model/order-items.model';
import { CartItemEntity } from 'src/domain/entities/cart-item/cart-item.entity';
import { CartItemModel } from './model/cart-items.model';
import { OrderDetailsEntity } from 'src/domain/entities/order-details/order-details.entity';
import { OrderDetailsModel } from './model/order-details.model';
import { UserPaymentEntity } from 'src/domain/entities/user-payment/user-payment.entity';
import { UserPaymentModel } from './model/user-payment.model';

@Injectable()
export class SQLDataService implements IDataServices, OnApplicationBootstrap {
  users: IGenericRepository<UserLoginInfoModel>;
  profileUser: IGenericRepository<ProfileUserModel>;
  profile: IGenericRepository<ProfileModel>;
  userAddress: IGenericRepository<UserAddressModel>;
  product: IGenericRepository<ProductEntity>;
  productCategory: IGenericRepository<ProductCategoryEntity>;
  productInventory: IGenericRepository<ProductInventoryEntity>;
  discount: IGenericRepository<DiscountEntity>;
  orderItems: IGenericRepository<OrderItemsEntity>;
  cartItem: IGenericRepository<CartItemEntity>;
  orderDetails: IGenericRepository<OrderDetailsEntity>;
  userPayment: IGenericRepository<UserPaymentEntity>;

  constructor(
    @InjectRepository(UserLoginInfoModel)
    private usersRepository: Repository<UserLoginInfoEntity>,
    @InjectRepository(ProfileUserModel)
    private profileUserRepository: Repository<ProfileUserEntity>,
    @InjectRepository(ProfileModel)
    private profileRepository: Repository<ProfileEntity>,
    @InjectRepository(UserAddressModel)
    private userAddressRepository: Repository<UserAddressEntity>,
    @InjectRepository(ProductModel)
    private productRepository: Repository<ProductEntity>,
    @InjectRepository(ProductCategoryModel)
    private productCategoryRepository: Repository<ProductCategoryEntity>,
    @InjectRepository(ProductInventoryModel)
    private productInventoryRepository: Repository<ProductInventoryEntity>,
    @InjectRepository(DiscountModel)
    private discountRepository: Repository<DiscountEntity>,
    @InjectRepository(OrderItemsModel)
    private orderItemsRepository: Repository<OrderItemsEntity>,
    @InjectRepository(CartItemModel)
    private cartItemRepository: Repository<CartItemEntity>,
    @InjectRepository(OrderDetailsModel)
    private orderDetailsRepository: Repository<OrderDetailsEntity>,
    @InjectRepository(UserPaymentModel)
    private userPaymentRepository: Repository<UserPaymentEntity>,
  ) {}

  onApplicationBootstrap() {
    this.users = new SQLGenericRepository<UserLoginInfoModel>(
      this.usersRepository,
    );
    this.profileUser = new SQLGenericRepository<ProfileUserModel>(
      this.profileUserRepository,
    );
    this.profile = new SQLGenericRepository<ProfileModel>(
      this.profileRepository,
    );
    this.userAddress = new SQLGenericRepository<UserAddressModel>(
      this.userAddressRepository,
    );
    this.product = new SQLGenericRepository<ProductModel>(
      this.productRepository,
    );
    this.productCategory = new SQLGenericRepository<ProductCategoryModel>(
      this.productCategoryRepository,
    );
    this.productInventory = new SQLGenericRepository<ProductInventoryModel>(
      this.productInventoryRepository,
    );
    this.discount = new SQLGenericRepository<DiscountModel>(
      this.discountRepository,
    );
    this.orderItems = new SQLGenericRepository<OrderItemsModel>(
      this.orderItemsRepository,
    );
    this.cartItem = new SQLGenericRepository<CartItemEntity>(
      this.cartItemRepository,
    );
    this.orderDetails = new SQLGenericRepository<OrderDetailsEntity>(
      this.orderDetailsRepository,
    );
    this.userPayment = new SQLGenericRepository<UserPaymentModel>(
      this.userPaymentRepository,
    );
  }
}
