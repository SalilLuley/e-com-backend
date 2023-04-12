import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { IDataServices } from 'src/domain/abstracts';
import { ProfileDtoConvertor } from '../convertors/profile/profile-dto.convertor';
import { ProfileEntity } from 'src/domain/entities/profile/profile.entity';
import { ProfileUserConvertor } from '../convertors/profile-user/profile-user.convertor';
import { ProfileUserEntity } from 'src/domain/entities/profile-user/profile-user.entity';
import { IResponse } from 'src/domain/common/response.interface';
import { UserLoginInfoResDTO } from 'src/domain';

@Injectable()
export class ProfileUpdateInterceptor implements NestInterceptor {
  constructor(
    private databaseService: IDataServices,
    private profileDtoConvertor: ProfileDtoConvertor,
    private profileUserConvertor: ProfileUserConvertor,
  ) {}
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const { body } = context.switchToHttp().getRequest();
    return next.handle().pipe(
      tap(async ({ data }: IResponse<UserLoginInfoResDTO>) => {
        const entity: ProfileEntity =
          this.profileDtoConvertor.toEntityFromUserLoginInfoReqDTO(body);
        const profileEntity: ProfileEntity =
          await this.databaseService.profile.create(entity);

        const puEntity: ProfileUserEntity =
          this.profileUserConvertor.toEntityFromProfileEntity(
            data,
            profileEntity,
          );

        const profileUserEntity: ProfileUserEntity =
          await this.databaseService.profileUser.create(puEntity);
      }),
    );
  }
}
