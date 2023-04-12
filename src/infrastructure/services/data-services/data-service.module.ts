import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from 'src/infrastructure/frameworks/data-services/mongo/mongo-data-services.module';
import { SQLDataServiceModule } from 'src/infrastructure/frameworks/data-services/sql/sql-data-services.module';

@Module({
  imports: [SQLDataServiceModule], //[MongoDataServicesModule],
  exports: [SQLDataServiceModule], //[MongoDataServicesModule],
})
export class DataServicesModule {}
