import { Module } from '@nestjs/common';
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
import { UserAddressController } from './infrastructure/controllers/user-address/user-address.controller';
import { UserAddressUsecaseModule } from './use-cases/user-address/user-address.module';

@Module({
  imports: [
    DataServicesModule,
    UserUsecaseModule,
    LoginUsecaseModule,
    JwtModule.register({}),
    CustomJwtModule,
    ThrottlerModule.forRoot({
      ttl: +process.env.THROTTLER_TTL,
      limit: +process.env.THROTTLER_LIMIT,
    }),
    ConvertorsModule,
    BcryptModule,
    UserAddressUsecaseModule,
  ],
  controllers: [UserController, AuthController, UserAddressController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
