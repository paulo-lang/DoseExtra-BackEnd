import { Book } from './book.entity';
import { BookService } from "./book.service";
export declare class BookController {
    private bookService;
    constructor(bookService: BookService);
    obterTodos(): Promise<Book[]>;
    obterUm(params: any): Promise<Book>;
    criar(book: Book): Promise<void>;
    alterar(book: Book): Promise<void>;
    apagar(params: any): Promise<void>;
}
