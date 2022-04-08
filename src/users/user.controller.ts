import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from './user.entity';
import { UserService } from "./user.service";

@Controller('/api/v1/users')
@UseGuards(AuthGuard('jwt'))
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async obterTodos(): Promise<User[]> {
        return this.userService.obterTodos();
    }

    @Get(':id')
    async obterUm(@Param('id', new ParseUUIDPipe()) id:string): Promise<User> {
        return this.userService.obterUm({id});
    }

    @Post()
    async criar(@Body() user: CreateUserDto) {
        this.userService.criar(user);
    }

    @Put(':id')
    async alterar(@Param('id', new ParseUUIDPipe()) id:string, @Body() user: UpdateUserDto){
        return this.userService.alterar(id, user);
    }

    @Delete(':id')
    async apagar(@Param('id', new ParseUUIDPipe()) id:string) {
        this.userService.apagar(id);
    }
}