import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const serverConfig = config.get('server');
  const logger = new Logger('bootstrap');
  const PORT = process.env.PORT || serverConfig.port;

  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV === 'development') {
    app.enableCors()
  } else {
    app.enableCors({ origin: serverConfig.origin })
    logger.log(`Accepting request from "${serverConfig.origin}"`);
  }

  await app.listen(PORT);

  logger.log(`Application started on port ${PORT}`);
}
bootstrap();
