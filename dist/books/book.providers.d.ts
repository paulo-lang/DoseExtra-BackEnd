import { Connection, Repository } from 'typeorm';
import { Book } from './book.entity';
export declare const bookProviders: {
    provide: string;
    useFactory: (connection: Connection) => Repository<Book>;
    inject: string[];
}[];
