import { UserService } from 'src/users/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(user: any): Promise<{
        token: string;
    }>;
    validateUser(username: string, password: string): Promise<any>;
}
