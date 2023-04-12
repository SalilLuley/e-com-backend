import { IGenericRepository } from '.';
import { UserLoginInfoEntity } from '../entities';
import { ProfileUserEntity } from '../entities/profile-user/profile-user.entity';
import { ProfileEntity } from '../entities/profile/profile.entity';

export abstract class IDataServices {
  abstract users: IGenericRepository<UserLoginInfoEntity>;
  abstract profileUser: IGenericRepository<ProfileUserEntity>;
  abstract profile: IGenericRepository<ProfileEntity>;
}
