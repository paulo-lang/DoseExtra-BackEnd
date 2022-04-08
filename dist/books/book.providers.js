"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookProviders = void 0;
const book_entity_1 = require("./book.entity");
exports.bookProviders = [
    {
        provide: 'BOOK_REPOSITORY',
        useFactory: (connection) => connection.getRepository(book_entity_1.Book),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=book.providers.js.map