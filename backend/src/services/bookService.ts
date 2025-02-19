import prisma from "../prismaClient";
import { Prisma } from "@prisma/client";
export const getAllBooks = async (
  title?: string,
  author?: string,
  page: number = 1
) => {
  return prisma.book.findMany({
    where: {
      title: title
        ? ({ contains: title, mode: "insensitive" } as Prisma.StringFilter)
        : undefined,
      author: author
        ? ({ contains: author, mode: "insensitive" } as Prisma.StringFilter)
        : undefined,
    },
    skip: (page - 1) * 10,
    take: 10,
  });
};

export const getBookById = async (id: number) => {
  return await prisma.book.findUnique({ where: { id } });
};

export const createBook = async (data: {
  title: string;
  author: string;
  stock: number;
}) => {
  return await prisma.book.create({ data });
};

export const updateBook = async (
  id: number,
  data: { title?: string; author?: string; stock?: number }
) => {
  return await prisma.book.update({ where: { id }, data });
};

export const deleteBook = async (id: number) => {
  return await prisma.book.delete({ where: { id } });
};
