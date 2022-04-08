import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AssertionError } from "assert";
import { NotFoundError } from "rxjs";
import { FindConditions, FindOneOptions, Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./user.entity";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }

    async obterTodos(): Promise<User[]> {
        return await this.userRepository.find({ select: ['id', 'name'] });
    }

    async obterUm(conditions: FindConditions<User>, options?: FindOneOptions<User>): Promise<User | undefined> {

        try {
            return await this.userRepository.findOneOrFail(conditions, options)
        } catch (error) {
            throw new NotFoundError(error.message)
        }

    }

    async criar(userCreate: CreateUserDto) {
        const user = this.userRepository.create(userCreate)
        return await this.userRepository.save(user)
    }

    async alterar(id: string, data: UpdateUserDto) {

        try {
            const user = await this.obterUm({ id })
            this.userRepository.merge(user, data)
            return await this.userRepository.save(user)
        } catch
        {
            throw new AssertionError({ message: "Error at updating event" })
        }

    }

    async apagar(id: string) {
        await this.userRepository.findOneOrFail({id})
        this.userRepository.softDelete({id})
    }
}