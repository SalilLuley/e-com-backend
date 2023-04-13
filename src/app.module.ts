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
import { ProductController } from './infrastructure/controllers/product/product.controller';
import { ProductUsecaseModule } from './use-cases/product/product.module';
import { UseCasesModule } from './use-cases/use-cases.module';
import { ProductCategoryController } from './infrastructure/controllers/product-category/product-category.controller';

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
    ProductUsecaseModule,
    UseCasesModule,
  ],
  controllers: [
    UserController,
    AuthController,
    UserAddressController,
    ProductController,
    ProductCategoryController,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
