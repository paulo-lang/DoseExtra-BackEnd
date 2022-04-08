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
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const assert_1 = require("assert");
const typeorm_1 = require("typeorm");
let BookService = class BookService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async obterTodos() {
        return this.bookRepository.find();
    }
    async obterUm(id) {
        return this.bookRepository.findOne({ id: id });
    }
    async criar(book) {
        this.bookRepository.save(book);
    }
    async alterar(book) {
        try {
            this.bookRepository.update({
                id: book.id
            }, {
                title: book.title,
                desc: book.desc,
                price: book.price
            });
        }
        catch (_a) {
            throw new assert_1.AssertionError({ message: "Error at updating event" });
        }
    }
    async apagar(id) {
        const Book = await this.obterUm(id);
        try {
            this.bookRepository.delete(Book);
        }
        catch (_a) {
            throw new assert_1.AssertionError({ message: "Error at deleting event" });
        }
    }
};
BookService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('BOOK_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map