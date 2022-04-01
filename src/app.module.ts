import { Module } from '@nestjs/common';
import { BookModule } from './books/book.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    BookModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
