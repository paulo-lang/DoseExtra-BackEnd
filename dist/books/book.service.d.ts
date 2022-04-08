import { Repository } from "typeorm";
import { Book } from "./book.entity";
export declare class BookService {
    private bookRepository;
    constructor(bookRepository: Repository<Book>);
    obterTodos(): Promise<Book[]>;
    obterUm(id: number): Promise<Book | undefined>;
    criar(book: Book): Promise<void>;
    alterar(book: Book): Promise<void>;
    apagar(id: number): Promise<void>;
}
