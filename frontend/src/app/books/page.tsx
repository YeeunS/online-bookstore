"use client";

import { useEffect, useState } from "react";
import { getBooks } from "@/lib/api";

type Book = {
  id: number;
  title: string;
  author: string;
};

export default function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState({ title: "", author: "" });
  const [page, setPage] = useState(1);

  useEffect(() => {
    getBooks(search.title, search.author, page).then(setBooks);
  }, [search, page]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold">📚 온라인 서점</h1>

      <ul>
        {books.map((book) => (
          <li key={book.id} className="border p-2 my-2">
            {book.title} - {book.author}
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))}>⬅️</button>
        <span> {page} </span>
        <button onClick={() => setPage((p) => p + 1)}>➡️</button>
      </div>
    </div>
  );
}
