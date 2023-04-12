import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UserController } from './infrastructure/controllers';
import { DataServicesModule } from './infrastructure/services/data-services/data-service.module';
import { UserUsecaseModule } from './use-cases/user/user.module';
import { AuthController } from './infrastructure/controllers/auth/auth.controller';
import { LoginUsecaseModule } from './use-cases/auth/auth.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { CustomJwtModule } from './infrastructure/frameworks/jwt/jwt.module';
import { ConvertorsModule } from './infrastructure/convertors/convertors.module';
import { BcryptModule } from './infrastructure/frameworks/bcrypt/bcrypt.module';
import { AccessTokenGuard } from './infrastructure/guards/auth/accessToken.guard';
import { AuthMiddleware } from './infrastructure/middleware/auth.middleware';

@Module({
  imports: [
    DataServicesModule,
    UserUsecaseModule,
    LoginUsecaseModule,
    JwtModule.register({}),
    CustomJwtModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    ConvertorsModule,
    BcryptModule,
  ],
  controllers: [UserController, AuthController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
