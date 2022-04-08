import { Inject, Injectable } from "@nestjs/common";
import { AssertionError } from "assert";
import { Repository } from "typeorm";
import { Book } from "./book.entity";

@Injectable()
export class BookService {

    constructor(
        @Inject('BOOK_REPOSITORY')
        private bookRepository: Repository<Book>
    ){}

    async obterTodos(): Promise<Book[]> {
        return this.bookRepository.find();
    }

    async obterUm(id: number): Promise<Book | undefined> {
        return this.bookRepository.findOne({id: id})
    }

    async criar(book: Book) {
        this.bookRepository.save(book)
    } 

    async alterar(book: Book) {

        try{
            this.bookRepository.update({
                id: book.id
            }, {
                title: book.title,
                desc: book.desc,
                price: book.price
            });
        }catch
            {
                throw new AssertionError({message: "Error at updating event"})
            }
        
    }

    async apagar(id: number) {
        const Book: Book = await this.obterUm(id);

        try{
            this.bookRepository.delete(Book)
        }catch{
            throw new AssertionError({message: "Error at deleting event"})
        }
    }
}