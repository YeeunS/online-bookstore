"use client";

import { useEffect, useState } from "react";
import { getBooks } from "@/lib/api";
import Link from "next/link";

interface Book {
  id: number;
  title: string;
  author: string;
}

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [searchTitle, setSearchTitle] = useState(""); // 실제 검색어
  const [searchAuthor, setSearchAuthor] = useState("");

  const fetchBooks = async (
    searchTitle: string,
    searchAuthor: string,
    page: number
  ) => {
    try {
      const data = await getBooks(searchTitle, searchAuthor, page);
      setBooks(data);
    } catch (error) {
      console.error("❌ 책 목록을 가져오는 중 오류 발생:", error);
    }
  };

  // 검색어 변경되거나 페이지 변경될 때 데이터 다시 불러오기
  useEffect(() => {
    fetchBooks(searchTitle, searchAuthor, page);
  }, [searchTitle, searchAuthor, page]);

  // 검색 버튼 클릭 또는 엔터 키 입력 시 실행
  const handleSearch = () => {
    setSearchTitle(title);
    setSearchAuthor(author);
    setPage(1); // 검색 시 첫 페이지로 이동
  };

  // 엔터 키 입력 시 검색 실행
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <main>
      <h1>📚 책 목록</h1>

      {/* 검색 입력 필드 */}
      <div>
        <input
          type="text"
          placeholder="제목 검색"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyDown} 
        />
        <input
          type="text"
          placeholder="저자 검색"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          onKeyDown={handleKeyDown} 
        />
        <div className="button-group">
          <button onClick={handleSearch}>검색</button>
        </div>
      </div>

      {/* 책 목록 */}
      <ul>
        {books.length === 0 ? (
          <p>🔍 검색 결과가 없습니다.</p>
        ) : (
          books.map((book) => (
            <li key={book.id}>
              <Link href={`/books/${book.id}`}>{book.title}</Link> -{" "}
              {book.author}
            </li>
          ))
        )}
      </ul>

      {/* 페이지네이션 */}
      <div className="button-group">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          이전
        </button>
        <span> {page} 페이지 </span>
        <button onClick={() => setPage(page + 1)}>다음</button>
      </div>
    </main>
  );
}
