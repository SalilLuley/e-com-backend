import { Module } from '@nestjs/common';
import { UserUsecase } from './user.usecase';
import { DataServicesModule } from 'src/infrastructure/services/data-services/data-service.module';
import { BcryptModule } from 'src/infrastructure/frameworks/bcrypt/bcrypt.module';
import { ConvertorsModule } from 'src/infrastructure/convertors/convertors.module';
import { CustomJwtModule } from 'src/infrastructure/frameworks/jwt/jwt.module';

@Module({
  imports: [
    DataServicesModule,
    BcryptModule,
    ConvertorsModule,
    CustomJwtModule,
  ],
  providers: [UserUsecase],
  exports: [UserUsecase],
})
export class UserUsecaseModule {}
