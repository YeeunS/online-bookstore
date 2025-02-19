"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.createBook = exports.getBookById = exports.getAllBooks = void 0;
const prismaClient_1 = __importDefault(require("../prismaClient"));
const getAllBooks = (title_1, author_1, ...args_1) => __awaiter(void 0, [title_1, author_1, ...args_1], void 0, function* (title, author, page = 1) {
    return prismaClient_1.default.book.findMany({
        where: {
            AND: [
                title ? { title: { contains: title } } : {},
                author ? { author: { contains: author } } : {},
            ],
        },
        skip: (page - 1) * 10,
        take: 10,
    });
});
exports.getAllBooks = getAllBooks;
const getBookById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient_1.default.book.findUnique({ where: { id } });
});
exports.getBookById = getBookById;
const createBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient_1.default.book.create({ data });
});
exports.createBook = createBook;
const updateBook = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient_1.default.book.update({ where: { id }, data });
});
exports.updateBook = updateBook;
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prismaClient_1.default.book.delete({ where: { id } });
});
exports.deleteBook = deleteBook;
