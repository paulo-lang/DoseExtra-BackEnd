import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book{
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 60,
        nullable: false
    })
    title: string;

    @Column({
        length: 400 
    })
    desc: string;

    @Column("decimal", { precision: 10, scale: 2 })
    price: number;
}