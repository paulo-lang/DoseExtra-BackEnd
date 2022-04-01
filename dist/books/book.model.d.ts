import { Model } from "sequelize-typescript";
export declare class Book extends Model<Book> {
    code: string;
    name: string;
    price: number;
}
