import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/infrastructure/services/data-services/data-service.module';
import { BcryptModule } from 'src/infrastructure/frameworks/bcrypt/bcrypt.module';
import { ConvertorsModule } from 'src/infrastructure/convertors/convertors.module';
import { CustomJwtModule } from 'src/infrastructure/frameworks/jwt/jwt.module';
import { UserAddressUsecase } from './user-address.usecase';

@Module({
  imports: [DataServicesModule, ConvertorsModule],
  providers: [UserAddressUsecase],
  exports: [UserAddressUsecase],
})
export class UserAddressUsecaseModule {}
