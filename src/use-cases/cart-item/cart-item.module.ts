import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/infrastructure/services/data-services/data-service.module';
import { ConvertorsModule } from 'src/infrastructure/convertors/convertors.module';
import { CartItemUsecase } from './cart-item.usecase';

@Module({
  imports: [DataServicesModule, ConvertorsModule],
  providers: [CartItemUsecase],
  exports: [CartItemUsecase],
})
export class CartItemUsecaseModule {}
