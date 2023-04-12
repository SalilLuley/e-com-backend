import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { LoggingInterceptor } from './infrastructure/interceptors/logger.interceptor';
import { LoggerService } from './infrastructure/frameworks/logger/logger.service';

import helmet from 'helmet';
import { ResponseInterceptor } from './infrastructure/interceptors/response.interceptor';
import { AllExceptionFilter } from './infrastructure/filters/exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalInterceptors(new LoggingInterceptor(new LoggerService()));
  app.useGlobalFilters(new AllExceptionFilter(new LoggerService()));

  app.use(helmet());

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('E-Com MS')
    .setDescription('This is e-commerce ms API description')
    .setVersion('1.0')
    .addTag('e-com')
    .setExternalDoc('Postman Collection', '../api-json')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT);
}
bootstrap();
