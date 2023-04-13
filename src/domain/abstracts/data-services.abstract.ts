import { IGenericRepository } from '.';
import { UserLoginInfoEntity } from '../entities';
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
}
