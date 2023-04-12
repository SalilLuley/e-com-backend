import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { Injectable } from '@nestjs/common';
import { JwtPayload } from 'src/domain/common/jwt-payload.interface';
import { UserLoginInfoEntity } from 'src/domain';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_REFRESH_SECRET,
      passReqToCallback: true,
    });
  }

  validate(req: Request, payload: JwtPayload): UserLoginInfoEntity {
    const refreshToken = req.get('Authorization').replace('Bearer', '').trim();
    return {
      userLoginInfoId: +payload.sub,
      refreshToken,
    };
  }
}
