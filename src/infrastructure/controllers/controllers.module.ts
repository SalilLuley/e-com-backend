import { Module } from '@nestjs/common';

import { AuthController } from './auth/auth.controller';
import { ProductCategoryController } from './product-category/product-category.controller';
import { ProductInventoryController } from './product-inventory/product-inventory.controller';
import { ProductController } from './product/product.controller';
import { UserAddressController } from './user-address/user-address.controller';
import { UserController } from './user/user.controller';
import { JwtModule } from '@nestjs/jwt';
import { LoginUsecaseModule } from 'src/use-cases/auth/auth.module';
import { ProductUsecaseModule } from 'src/use-cases/product/product.module';
import { UseCasesModule } from 'src/use-cases/use-cases.module';
import { UserAddressUsecaseModule } from 'src/use-cases/user-address/user-address.module';
import { UserUsecaseModule } from 'src/use-cases/user/user.module';
import { ConvertorsModule } from '../convertors/convertors.module';
import { BcryptModule } from '../frameworks/bcrypt/bcrypt.module';
import { CustomJwtModule } from '../frameworks/jwt/jwt.module';
import { DataServicesModule } from '../services/data-services/data-service.module';

@Module({
  imports: [
    CustomJwtModule,
    ConvertorsModule,
    BcryptModule,
    UseCasesModule,
    DataServicesModule,
    UserUsecaseModule,
    LoginUsecaseModule,
    UserAddressUsecaseModule,
    ProductUsecaseModule,
  ],
  controllers: [
    UserController,
    AuthController,
    UserAddressController,
    ProductController,
    ProductCategoryController,
    ProductInventoryController,
  ],
})
export class ControllersModule {}
