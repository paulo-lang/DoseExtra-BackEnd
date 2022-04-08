import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import { compareSync } from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private readonly jwtService: JwtService){}

    async login(user) {
        const payload = { sub: user.id, username: user.username}

        return{
            token: this.jwtService.sign(payload)
        }
    }

    async validateUser(username: string, password: string){
        let user
        try{
            user = await this.userService.obterUm({ username });
        } catch (error) {
            return null
        }

        const isPasswordValid = compareSync(password, user.password)
        if(!isPasswordValid) return null

        return user
    }
}
