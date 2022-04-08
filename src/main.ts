<<<<<<< HEAD
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'typeorm';
=======
import { NestFactory } from '@nestjs/core';
>>>>>>> b11d01109ee7d263f0c2e4085ac21992208443eb
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  app.useGlobalPipes(new ValidationPipe({
      transform: true
    }))
  useContainer(app.select(AppModule), { fallbackOnErrors: true })
=======
>>>>>>> b11d01109ee7d263f0c2e4085ac21992208443eb
  await app.listen(3000);
}
bootstrap();
