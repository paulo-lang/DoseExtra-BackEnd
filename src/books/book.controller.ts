import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from './book.entity';
import { BookService } from "./book.service";

@Controller('books')
export class BookController {
    constructor(private bookService: BookService) {

    }

    @Get()
    async obterTodos(): Promise<Book[]> {
        return this.bookService.obterTodos();
    }

    @Get(':id')
    async obterUm(@Param() params): Promise<Book> {
        return this.bookService.obterUm(params.id);
    }

    @Post()
    async criar(@Body() book: Book) {
        this.bookService.criar(book);
    }

    @Put()
    async alterar(@Body() book: Book){
        return this.bookService.alterar(book);
    }

    @Delete(':id')
    async apagar(@Param() params) {
        this.bookService.apagar(params.id);
    }
}