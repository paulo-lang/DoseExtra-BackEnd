import { FindConditions, FindOneOptions, Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./user.entity";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    obterTodos(): Promise<User[]>;
    obterUm(conditions: FindConditions<User>, options?: FindOneOptions<User>): Promise<User | undefined>;
    criar(userCreate: CreateUserDto): Promise<User>;
    alterar(id: string, data: UpdateUserDto): Promise<User>;
    apagar(id: string): Promise<void>;
}
