import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/infrastructure/services/data-services/data-service.module';
import { BcryptModule } from 'src/infrastructure/frameworks/bcrypt/bcrypt.module';
import { LoginUsecase } from './login.usecase';
import { ConvertorsModule } from 'src/infrastructure/convertors/convertors.module';
import { LogoutUsecase } from './logout.usecase';
import { LoggerModule } from 'src/infrastructure/frameworks/logger/logger.module';
import { CustomJwtModule } from 'src/infrastructure/frameworks/jwt/jwt.module';
import { JwtModule } from '@nestjs/jwt';
import { RefreshTokenUsecase } from './refresh-token.usecase';

@Module({
  imports: [
    LoggerModule,
    DataServicesModule,
    BcryptModule,
    ConvertorsModule,
    CustomJwtModule,
    JwtModule,
  ],
  providers: [LoginUsecase, LogoutUsecase, RefreshTokenUsecase],
  exports: [LoginUsecase, LogoutUsecase, RefreshTokenUsecase],
})
export class LoginUsecaseModule {}
