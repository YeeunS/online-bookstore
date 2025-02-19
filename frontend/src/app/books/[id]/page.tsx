"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getBookById, deleteBook, updateBook } from "@/lib/api";
import { useRouter } from "next/navigation";
import "@/styles/globals.css";

interface Book {
  id: number;
  title: string;
  author: string;
  stock: number;
}

export default function BookDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    async function fetchBook() {
      if (typeof id === "string") {
        const data = await getBookById(Number(id));
        setBook(data);
      }
    }
    fetchBook();
  }, [id]);

  async function handleDelete() {
    if (!book) return;
    await deleteBook(book.id);
    alert("책이 삭제되었습니다.");
    router.push("/books");
  }

  async function increaseStock() {
    if (!book) return;
    const updated = await updateBook(book.id, { stock: book.stock + 1 });
    setBook(updated);
  }

  async function decreaseStock() {
    if (!book || book.stock <= 0) return;
    const updated = await updateBook(book.id, { stock: book.stock - 1 });
    setBook(updated);
  }

  if (!book) return <p>📖 로딩 중...</p>;

  return (
    <main>
      <h1>{book.title}</h1>
      <p>✍️ 저자: {book.author}</p>
      <p>📦 재고: {book.stock}권</p>

      <div className="button-group">
        <button onClick={decreaseStock}>-</button>
        <button onClick={increaseStock}>+</button>
        <button onClick={handleDelete} style={{ color: "red" }}>
          삭제
        </button>
      </div>
    </main>
  );
}
