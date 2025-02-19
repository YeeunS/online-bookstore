"use client";

import { useState } from "react";
import { createBook } from "@/lib/api";
import { useRouter } from "next/navigation";
import "@/styles/globals.css";

export default function AddBookPage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [stock, setStock] = useState(1);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await createBook({ title, author, stock });
    alert("책이 추가되었습니다.");
    router.push("/books");
  }

  return (
    <main>
      <h1>📖 책 추가</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="책 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="저자"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="재고"
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
          min={1}
          required
        />
        <button type="submit">추가</button>
      </form>
    </main>
  );
}
