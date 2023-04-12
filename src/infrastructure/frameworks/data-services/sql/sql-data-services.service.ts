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

@Injectable()
export class SQLDataService implements IDataServices, OnApplicationBootstrap {
  users: IGenericRepository<UserLoginInfoModel>;
  profileUser: IGenericRepository<ProfileUserModel>;
  profile: IGenericRepository<ProfileModel>;

  constructor(
    @InjectRepository(UserLoginInfoModel)
    private usersRepository: Repository<UserLoginInfoModel>,
    @InjectRepository(ProfileUserModel)
    private profileUserRepository: Repository<ProfileUserEntity>,
    @InjectRepository(ProfileModel)
    private profileRepository: Repository<ProfileEntity>,
  ) {}

  onApplicationBootstrap() {
    this.users = new SQLGenericRepository<UserLoginInfoModel>(
      this.usersRepository,
      [
        'username',
        'firstname',
        'lastname',
        'password',
        'userLoginInfoId',
        'refreshToken',
        'role',
      ],
    );
    this.profileUser = new SQLGenericRepository<ProfileUserModel>(
      this.profileUserRepository,
    );
    this.profile = new SQLGenericRepository<ProfileModel>(
      this.profileRepository,
    );
  }
}
