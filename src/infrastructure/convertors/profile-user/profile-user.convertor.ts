import { Injectable } from '@nestjs/common';
import { UserLoginInfoResDTO } from 'src/domain';
import { ProfileUserEntity } from 'src/domain/entities/profile-user/profile-user.entity';
import { ProfileEntity } from 'src/domain/entities/profile/profile.entity';

@Injectable()
export class ProfileUserConvertor {
  toEntityFromProfileEntity(
    responseBody: UserLoginInfoResDTO,
    profileEntity: ProfileEntity,
  ): ProfileUserEntity {
    return {
      userLoginInfoId: responseBody.userId,
      profileId: profileEntity.profileId,
    };
  }
}
