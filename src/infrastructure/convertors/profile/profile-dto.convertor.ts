import { Injectable } from '@nestjs/common';
import { UserLoginInfoReqDTO } from 'src/domain';
import { ProfileEntity } from 'src/domain/entities/profile/profile.entity';

@Injectable()
export class ProfileDtoConvertor {
  toEntityFromUserLoginInfoReqDTO(body: UserLoginInfoReqDTO): ProfileEntity {
    const { firstname, lastname, role, username } = body;
    return {
      firstname,
      lastname,
      username,
      role,
    };
  }
}
