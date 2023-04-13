import { IGenericRepository } from '.';
import { UserLoginInfoEntity } from '../entities';
import { DiscountEntity } from '../entities/discount/discount.entity';
import { ProductCategoryEntity } from '../entities/product-category/product-category.entity';
import { ProductInventoryEntity } from '../entities/product-inventory/product-inventory.entity';
import { ProductEntity } from '../entities/product/product.entity';
import { ProfileUserEntity } from '../entities/profile-user/profile-user.entity';
import { ProfileEntity } from '../entities/profile/profile.entity';
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
}
