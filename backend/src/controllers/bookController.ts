import { Request, Response } from "express";
import * as bookService from "../services/bookService";

export const getAllBooks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, author, page } = req.query;

    const books = await bookService.getAllBooks(
      title as string | undefined,
      author as string | undefined,
      page ? Number(page) : 1
    );

    res.json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Error fetching books" });
  }
};

export const getBookById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const book = await bookService.getBookById(Number(req.params.id));
    if (!book) {
      res.status(404).json({ error: "Book not found" });
      return;
    }
    res.json(book); // ✅ Response만 보내고 별도 return 없음
  } catch (error) {
    res.status(500).json({ error: "Error fetching book" });
  }
};

export const createBook = async (req: Request, res: Response) => {
  try {
    const book = await bookService.createBook(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: "Error creating book" });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const book = await bookService.updateBook(Number(req.params.id), req.body);
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: "Error updating book" });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    await bookService.deleteBook(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error deleting book" });
  }
};
