import { Request, Response } from 'express';
import Book from '../types/Books';

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching books.' });
  }
};

// export const getBookById = async (req: Request, res: Response) => {
//   try {
//     const bookId = req.params.id;
//     const book = await Book.findByPk(bookId);
    
//     if (!book) {
//       res.status(404).json({ error: 'Book not found.' });
//       return;
//     }
    
//     res.json(book);
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred while fetching the book.' });
//   }
// };

// export const createBook = async (req: Request, res: Response) => {
//   try {
//     const { title, author, publishedYear } = req.body;
//     const newBook = await Book.create({ title, author, publishedYear });
//     res.status(201).json(newBook);
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred while creating the book.' });
//   }
// };

// export const updateBook = async (req: Request, res: Response) => {
//   try {
//     const bookId = req.params.id;
//     const { title, author, publishedYear } = req.body;

//     const book = await Book.findByPk(bookId);
//     if (!book) {
//       res.status(404).json({ error: 'Book not found.' });
//       return;
//     }

//     await book.update({ title, author, publishedYear });
//     res.json(book);
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred while updating the book.' });
//   }
// };

// export const deleteBook = async (req: Request, res: Response) => {
//   try {
//     const bookId = req.params.id;

//     const book = await Book.findByPk(bookId);
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