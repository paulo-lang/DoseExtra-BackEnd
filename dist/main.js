"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("typeorm");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true
    }));
    typeorm_1.useContainer(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
=======
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
>>>>>>> b11d01109ee7d263f0c2e4085ac21992208443eb
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map