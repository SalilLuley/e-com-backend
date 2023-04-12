import { OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IDataServices, IGenericRepository } from 'src/domain/abstracts';
import { UserLoginInfoModel } from '../sql/model/user.model';
import { Model } from 'mongoose';
import { MongoGenericRepository } from './mongo-generic-repository';
import { UserLoginInfoEntity } from 'src/domain';
import { ProfileUserEntity } from 'src/domain/entities/profile-user/profile-user.entity';
import { ProfileEntity } from 'src/domain/entities/profile/profile.entity';

export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  users: IGenericRepository<UserLoginInfoEntity>;
  profileUser: IGenericRepository<ProfileUserEntity>;
  profile: IGenericRepository<ProfileEntity>;

  constructor(
    @InjectModel(UserLoginInfoEntity.name)
    private userLoginInfoModel: Model<UserLoginInfoModel>,
  ) {}

  onApplicationBootstrap() {
    this.users = new MongoGenericRepository<UserLoginInfoEntity>(
      this.userLoginInfoModel,
    );
  }
}
