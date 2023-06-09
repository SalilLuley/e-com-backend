import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { UserLoginInfoEntity } from 'src/domain';
import { IDataServices } from 'src/domain/abstracts';
import { UserDtoConvertor } from '../convertors/user/user-dto.convertor';
import { BcryptService } from '../frameworks/bcrypt/bcrypt.service';

@Injectable()
export class RefreshTokenUpdateInterceptor implements NestInterceptor {
  constructor(
    private databaseService: IDataServices,
    private userDtoConvertor: UserDtoConvertor,
    private bcryptService: BcryptService,
  ) {}
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const { user, url } = context.switchToHttp().getRequest();
    const userId = url === '/auth/refresh' ? user.userLoginInfoId : null;
    return next.handle().pipe(
      tap(async (response) => {
        const refreshToken = response['data']['refreshToken'];
        const id = userId !== null ? userId : response['data']['userId'];

        const hashRefreshToken: string = await this.bcryptService.hash(
          refreshToken,
        );

        const updateEntity: UserLoginInfoEntity =
          this.userDtoConvertor.toUserLoginEntityForUpdateRefreshToken(
            hashRefreshToken,
          );

        await this.databaseService.users.update(id, updateEntity);
      }),
    );
  }
}
