"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
<<<<<<< HEAD
const event_module_1 = require("./events/event.module");
const user_module_1 = require("./users/user.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const media_module_1 = require("./medias/media.module");
const auth_module_1 = require("./auth/auth.module");
=======
const book_module_1 = require("./books/book.module");
const database_module_1 = require("./database/database.module");
>>>>>>> b11d01109ee7d263f0c2e4085ac21992208443eb
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
<<<<<<< HEAD
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: process.env.TYPEORM_CONNECTION,
                host: process.env.TYPEORM_HOST,
                port: process.env.TYPEORM_PORT,
                username: process.env.TYPEORM_USERNAME,
                password: process.env.TYPEORM_PASSWORD,
                database: process.env.TYPEORM_DATABASE,
                entities: [__dirname + '/**/*.entity{.js,.ts}'],
                synchronize: true
            }),
            event_module_1.EventModule,
            user_module_1.UserModule,
            media_module_1.MediaModule,
            auth_module_1.AuthModule
=======
            database_module_1.DatabaseModule,
            book_module_1.BookModule
>>>>>>> b11d01109ee7d263f0c2e4085ac21992208443eb
        ],
        controllers: [],
        providers: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map