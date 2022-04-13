import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'typeorm';
import { AppModule } from './app.module';
const cors = require('cors')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors())
  app.useGlobalPipes(new ValidationPipe({
      transform: true
    }))
  useContainer(app.select(AppModule), { fallbackOnErrors: true })
  await app.listen(3333);
}
bootstrap();
