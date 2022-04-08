import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { BookController } from "./book.controller";
import { bookProviders } from "./book.providers";
import { BookService } from "./book.service";

@Module({
    imports: [DatabaseModule],
    controllers:[BookController],
    providers:[...bookProviders, 
        BookService
    ],
    exports: [BookService]
})
export class BookModule {}