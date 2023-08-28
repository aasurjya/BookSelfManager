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
exports.deleteBook = exports.updateBook = exports.getBookById = exports.hello = exports.createBook = exports.getAllBooks = void 0;
const Books_1 = __importDefault(require("../types/Books"));
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("hello getallbooks");
        const books = yield Books_1.default.findAll();
        return res.json(books);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while fetching books.' });
    }
});
exports.getAllBooks = getAllBooks;
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, author, publishedYear } = req.body;
        const newBook = yield Books_1.default.create({ title, author, publishedYear });
        res.status(201).json(newBook);
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the book.' });
    }
});
exports.createBook = createBook;
const hello = (req, res) => {
    console.log("hello");
};
exports.hello = hello;
const getBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.id;
        const book = yield Books_1.default.findByPk(bookId);
        if (!book) {
            res.status(404).json({ error: 'Book not found.' });
            return;
        }
        res.json(book);
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the book.' });
    }
});
exports.getBookById = getBookById;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.id;
        const { title, author, publishedYear } = req.body;
        const book = yield Books_1.default.findByPk(bookId);
        if (!book) {
            res.status(404).json({ error: 'Book not found.' });
            return;
        }
        yield book.update({ title, author, publishedYear });
        res.json(book);
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the book.' });
    }
});
exports.updateBook = updateBook;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("delete");
    const bookId = req.params.id;
    try {
        const book = yield Books_1.default.findByPk(bookId);
        console.log('Raw SQL Query:', bookId);
        console.log('Fetched Book:', book);
        if (!book) {
            res.status(404).json({ error: 'Book not found.' });
            return;
        }
        console.log(bookId);
        // debugger
        yield book.destroy();
        return res.json({ message: 'Book deleted successfully.' });
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the book.' });
    }
});
exports.deleteBook = deleteBook;
// export const deleteBook = async (req: Request, res: Response) => {
//   const bookId = req.params.id;
//   try {
//     const book = await Book.findOne({
//       where: { id: bookId },
//     });
//     if (!book) {
//       res.status(404).json({ error: 'Book not found.' });
//       return;
//     }
//     await book.destroy();
//     res.json({ message: 'Book deleted successfully.' });
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred while deleting the book.' });
//   }
// };
