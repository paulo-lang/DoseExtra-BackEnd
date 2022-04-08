import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity({name: 'events'})
export class Event{
    @PrimaryGeneratedColumn('increment')
    id: string

    @IsNotEmpty({message: 'Title é obrigatório'})
    @Column({
        length: 60,
        nullable: false
    })
    title: string;

    @Column({
        length: 400 
    })
    desc: string;

    @IsNotEmpty({message: 'Price é obrigatório'})
    @Column("decimal", { precision: 10, scale: 2 })
    price: number;

    @CreateDateColumn()
    createdAt: string;

    @CreateDateColumn()
    updatedAt: string;
}