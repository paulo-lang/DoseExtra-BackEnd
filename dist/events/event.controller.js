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
exports.EventController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const create_update_event_dto_1 = require("./dto/create-update-event.dto");
const event_service_1 = require("./event.service");
let EventController = class EventController {
    constructor(eventService) {
        this.eventService = eventService;
    }
    async obterTodos() {
        return this.eventService.obterTodos();
    }
    async obterUm(id) {
        return this.eventService.obterUm(id);
    }
    async criar(event) {
        this.eventService.criar(event);
    }
    async alterar(id, event) {
        return this.eventService.alterar(id, event);
    }
    async apagar(id) {
        this.eventService.apagar(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventController.prototype, "obterTodos", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "obterUm", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_update_event_dto_1.CreateUpdateEventDto]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "criar", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Put(':id'),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_update_event_dto_1.CreateUpdateEventDto]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "alterar", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "apagar", null);
EventController = __decorate([
    common_1.Controller('/api/v1/events'),
    __metadata("design:paramtypes", [event_service_1.EventService])
], EventController);
exports.EventController = EventController;
//# sourceMappingURL=event.controller.js.map