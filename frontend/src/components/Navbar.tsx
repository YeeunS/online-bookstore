import Link from "next/link";
import "@/styles/globals.css";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">🏠 홈</Link>
      <Link href="/books">📚 책 목록</Link>
    </nav>
  );
}
