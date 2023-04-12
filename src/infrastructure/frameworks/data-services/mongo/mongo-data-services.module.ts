import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserLoginInfoSchema } from './model/user.model';
import { DATA_BASE_CONFIGURATION } from 'src/configuration';
import { IDataServices } from 'src/domain/abstracts';
import { MongoDataServices } from './mongo-data-services.service';
import { UserLoginInfoEntity } from 'src/domain/entities/user/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserLoginInfoEntity.name, schema: UserLoginInfoSchema },
    ]),
    MongooseModule.forRoot(DATA_BASE_CONFIGURATION.mongoConnectionString),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule {}
