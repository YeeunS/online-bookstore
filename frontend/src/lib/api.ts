const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

export async function getBooks(
  title?: string,
  author?: string,
  page: number = 1
) {
  const params = new URLSearchParams({ page: page.toString() });
  if (title) params.append("title", title);
  if (author) params.append("author", author);

  const res = await fetch(`${API_URL}/api/books?${params}`);
  if (!res.ok) throw new Error("책 데이터를 가져오지 못했습니다.");
  return res.json();
}

export async function getBookById(id: string | number) {
  const res = await fetch(`${API_URL}/api/books/${id}`);
  if (!res.ok) throw new Error("책 정보를 가져오지 못했습니다.");
  return res.json();
}

export async function createBook(book: {
  title: string;
  author: string;
  stock: number;
}) {
  const res = await fetch(`${API_URL}/api/books`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  if (!res.ok) throw new Error("책 추가 실패");
  return res.json();
}

export async function updateBook(
  id: string | number,
  book: { title?: string; author?: string; stock?: number }
) {
  const res = await fetch(`${API_URL}/api/books/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  if (!res.ok) throw new Error("책 수정 실패");
  return res.json();
}

export async function deleteBook(id: string | number) {
  const res = await fetch(`${API_URL}/api/books/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("책 삭제 실패");
  return res.json();
}

export async function addBook(book: {
  title: string;
  author: string;
  stock: number;
}) {
  const res = await fetch(`${API_URL}/api/books`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  if (!res.ok) throw new Error("책 추가 실패");
  return res.json();
}
