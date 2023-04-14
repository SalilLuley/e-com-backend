import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/infrastructure/services/data-services/data-service.module';
import { ConvertorsModule } from 'src/infrastructure/convertors/convertors.module';
import { UserPaymentUsecase } from './user-payment.usecase';

@Module({
  imports: [DataServicesModule, ConvertorsModule],
  providers: [UserPaymentUsecase],
  exports: [UserPaymentUsecase],
})
export class UserPaymentUsecaseModule {}
