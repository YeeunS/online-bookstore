"use client";

import { useEffect, useState } from "react";
import { getBooks } from "@/lib/api";

type Book = {
  id: string;
  title: string;
  author: string;
  stock: number;
};

export default function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (error) {
        console.error("책 목록을 불러오는 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>로딩 중...</p>;

  return (
    <div>
      <h1>책 목록</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author} (재고: {book.stock})
          </li>
        ))}
      </ul>
    </div>
  );
}
