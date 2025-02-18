"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getBookById } from "@/lib/api";

interface Book {
  id: string;
  title: string;
  author: string;
  stock: number;
}

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    async function fetchBook() {
      if (typeof id === "string") {
        const data = await getBookById(id);
        setBook(data);
      }
    }
    fetchBook();
  }, [id]);

  if (!book) return <p>📖 로딩 중...</p>;

  return (
    <main>
      <h1>{book.title}</h1>
      <p>✍️ 저자: {book.author}</p>
      <p>📦 재고: {book.stock}권</p>
    </main>
  );
}
