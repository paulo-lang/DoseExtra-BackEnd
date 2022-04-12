import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity({name: 'medias'})
export class Media{
    @PrimaryGeneratedColumn('increment')
    id: string

    @IsNotEmpty({message: 'Link é obrigatório'})
    @Column()
    link: string;

    @IsNotEmpty({message: "Tipo é obrigatório"})
    @Column()
    type: string;
    
    @CreateDateColumn()
    createdAt: string;

    @CreateDateColumn()
    updatedAt: string;
}