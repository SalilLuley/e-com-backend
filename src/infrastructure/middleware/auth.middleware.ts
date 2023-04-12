import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { IDataServices } from 'src/domain/abstracts';
import { UserLoginInfoEntity } from 'src/domain';
import { ISessionDetails } from 'src/domain/entities/session/session.entity';
import { Request } from 'express';
import { extractTokenFromHeader } from '../common/extractTokenFromHeader';
import { JWTDataService } from '../frameworks/jwt/jwt.dataservice';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    // private jwtService: JwtService,
    private databaseService: IDataServices,
    private jwtDataService: JWTDataService,
  ) {}
  async use(request: Request, response: any, next: (error?: any) => void) {
    const { body, headers } = request;
    const token = extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const {
        firstname,
        lastname,
        userLoginInfoId,
        username,
      }: UserLoginInfoEntity =
        await this.databaseService.users.get<UserLoginInfoEntity>({
          userLoginInfoId: 1,
        });

      const sessionDetails: ISessionDetails = {
        firstname,
        lastname,
        userLoginInfoId,
        username,
      };
      request['session'] = sessionDetails;
      next();
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
