"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addBook } from "@/lib/api";

export default function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [stock, setStock] = useState(1);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await addBook({ title, author, stock });
    router.push("/books");
  }

  return (
    <main>
      <h1>📖 새 책 추가</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="책 제목"
          required
        />
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="저자"
          required
        />
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
          min="1"
          required
        />
        <button type="submit">추가하기</button>
      </form>
    </main>
  );
}
