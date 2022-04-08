import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { EventModule } from './events/event.module';
import { UserModule } from './users/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MediaModule } from './medias/media.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      synchronize: true
    } as TypeOrmModuleOptions),
    EventModule,
    UserModule,
    MediaModule,
    AuthModule
=======
import { BookModule } from './books/book.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    BookModule
>>>>>>> b11d01109ee7d263f0c2e4085ac21992208443eb
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
