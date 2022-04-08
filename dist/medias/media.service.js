"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const assert_1 = require("assert");
const rxjs_1 = require("rxjs");
const typeorm_2 = require("typeorm");
const media_entity_1 = require("./media.entity");
let MediaService = class MediaService {
    constructor(mediaRepository) {
        this.mediaRepository = mediaRepository;
    }
    async obterTodos() {
        return await this.mediaRepository.find();
    }
    async obterUm(conditions, options) {
        try {
            return await this.mediaRepository.findOneOrFail(conditions, options);
        }
        catch (error) {
            throw new rxjs_1.NotFoundError(error.message);
        }
    }
    async criar(mediaCreate) {
        const media = this.mediaRepository.create(mediaCreate);
        return await this.mediaRepository.save(media);
    }
    async alterar(id, mediaUpdate) {
        try {
            const media = await this.obterUm({ id });
            this.mediaRepository.merge(media, mediaUpdate);
            return await this.mediaRepository.save(media);
        }
        catch (_a) {
            throw new assert_1.AssertionError({ message: "Error at updating event" });
        }
    }
    async apagar(id) {
        await this.mediaRepository.findOneOrFail({ id });
        this.mediaRepository.softDelete({ id });
    }
};
MediaService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(media_entity_1.Media)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MediaService);
exports.MediaService = MediaService;
//# sourceMappingURL=media.service.js.map