const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

export async function getBooks(title = "", author = "", page = 1) {
  const queryParams = new URLSearchParams();
  if (title) queryParams.append("title", title);
  if (author) queryParams.append("author", author);
  queryParams.append("page", page.toString());

  const res = await fetch(`${API_URL}/api/books?${queryParams.toString()}`);
  if (!res.ok) throw new Error("책 데이터를 가져오지 못했습니다.");
  return res.json();
}

export async function getBookById(id: number) {
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
  return res.json();
}

export async function updateBook(
  id: number,
  book: { title?: string; author?: string; stock?: number }
) {
  const res = await fetch(`${API_URL}/api/books/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  return res.json();
}

export async function deleteBook(id: number) {
  return await fetch(`${API_URL}/api/books/${id}`, { method: "DELETE" });
}
