import { Module } from '@nestjs/common';
import { DataServicesModule } from './infrastructure/services/data-services/data-service.module';
import { UserUsecaseModule } from './use-cases/user/user.module';
import { LoginUsecaseModule } from './use-cases/auth/auth.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { CustomJwtModule } from './infrastructure/frameworks/jwt/jwt.module';
import { ConvertorsModule } from './infrastructure/convertors/convertors.module';
import { BcryptModule } from './infrastructure/frameworks/bcrypt/bcrypt.module';
import { UserAddressUsecaseModule } from './use-cases/user-address/user-address.module';
import { ProductUsecaseModule } from './use-cases/product/product.module';
import { UseCasesModule } from './use-cases/use-cases.module';
import { ControllersModule } from './infrastructure/controllers/controllers.module';

@Module({
  imports: [
    JwtModule.register({}),
    ThrottlerModule.forRoot({
      ttl: +process.env.THROTTLER_TTL,
      limit: +process.env.THROTTLER_LIMIT,
    }),
    ControllersModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
