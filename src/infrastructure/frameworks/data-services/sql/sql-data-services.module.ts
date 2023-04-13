import { Module } from '@nestjs/common';
import { IDataServices } from 'src/domain/abstracts';
import { SQLDataService } from './sql-data-services.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserLoginInfoModel } from './model/user.model';
import { ProfileUserModel } from './model/profile-user.model';
import { ProfileModel } from './model/profile.model';
import { UserAddressModel } from './model/user-address.model';
import { ProductModel } from './model/product.model';
import { ProductCategoryModel } from './model/product-category.model';
import { ProductInventoryModel } from './model/product-inventory.model';
import { DiscountModel } from './model/discount.model';
import { OrderItemsModel } from './model/order-items.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      database: process.env.DATABASE_NAME,
      entities: [__dirname + '/../**/*.model.js'],
      logging: ['query', 'error'],
    }),
    TypeOrmModule.forFeature([
      UserLoginInfoModel,
      ProfileUserModel,
      ProfileModel,
      UserAddressModel,
      ProductModel,
      ProductCategoryModel,
      ProductInventoryModel,
      DiscountModel,
      OrderItemsModel,
    ]),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: SQLDataService,
    },
  ],
  exports: [IDataServices],
})
export class SQLDataServiceModule {}
