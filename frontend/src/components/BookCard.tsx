import Link from "next/link";

interface Book {
  id: string;
  title: string;
  author: string;
}

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p>✍️ {book.author}</p>
      <Link href={`/books/${book.id}`}>🔍 상세 보기</Link>
    </div>
  );
}
