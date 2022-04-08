import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BeforeInsert } from 'typeorm';

import {hashSync} from 'bcrypt'

@Entity({name: 'users'})
export class User{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @IsNotEmpty({ message: 'Nome é obrigatório'})
    @IsString()
    @Column({
        length: 60
    })
    name: string;

    @IsNotEmpty({ message: 'Username é obrigatório'})
    @IsString()
    @Column({
        length: 30
    })
    username: string;

    @IsNotEmpty({message: 'Password é obrigatório'})
    @IsString()
    @Column({
        length: 300
    })
    password: string;

    @IsNotEmpty()
    @Column()
    level: number

    @CreateDateColumn()
    createdAt: string;

    @CreateDateColumn()
    updatedAt: string;

    @BeforeInsert()
    hashPassword(){
        this.password = hashSync(this.password, 10)
    }
}