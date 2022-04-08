import { IsNotEmpty } from "class-validator";

export class CreateUpdateEventDto {
    @IsNotEmpty({message: 'Title é obrigatório'})
    title:string

    desc:string

    @IsNotEmpty({message: 'Price é obrigatório'})
    price: number
}