import { IsNotEmpty } from "class-validator";

export class CreateUpdateMediaDto {
    @IsNotEmpty()
    link: string

    @IsNotEmpty()
    type: string
}