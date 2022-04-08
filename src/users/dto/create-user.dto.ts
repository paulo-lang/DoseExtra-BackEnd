import { IsNotEmpty, Matches } from "class-validator";
import { RegExHelper } from "src/helpers/regex.helper";

export class CreateUserDto {
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    @Matches(RegExHelper.password)
    password: string

    @IsNotEmpty()
    level: number
}