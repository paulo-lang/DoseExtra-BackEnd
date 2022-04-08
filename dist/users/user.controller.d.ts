import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from './user.entity';
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    obterTodos(): Promise<User[]>;
    obterUm(id: string): Promise<User>;
    criar(user: CreateUserDto): Promise<void>;
    alterar(id: string, user: UpdateUserDto): Promise<User>;
    apagar(id: string): Promise<void>;
}
