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
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const assert_1 = require("assert");
const typeorm_2 = require("typeorm");
const event_entity_1 = require("./event.entity");
let EventService = class EventService {
    constructor(eventRepository) {
        this.eventRepository = eventRepository;
    }
    async obterTodos() {
        return await this.eventRepository.find();
    }
    async obterUm(id) {
        return await this.eventRepository.findOneOrFail({ id: id });
    }
    async criar(eventCreate) {
        const event = this.eventRepository.create(eventCreate);
        return await this.eventRepository.save(event);
    }
    async alterar(id, eventUpdate) {
        try {
            const event = await this.obterUm(id);
            this.eventRepository.merge(event, eventUpdate);
            return await this.eventRepository.save(event);
        }
        catch (_a) {
            throw new assert_1.AssertionError({ message: "Error at updating event" });
        }
    }
    async apagar(id) {
        await this.eventRepository.findOneOrFail({ id });
        this.eventRepository.softDelete({ id });
    }
};
EventService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(event_entity_1.Event)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EventService);
exports.EventService = EventService;
//# sourceMappingURL=event.service.js.map