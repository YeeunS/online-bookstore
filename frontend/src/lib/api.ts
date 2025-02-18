const API_URL =
  process.env.NEXT_PUBLIC_BACKEND_API_URL || "http://localhost:4000";

export async function getBooks() {
  try {
    const res = await fetch(`${API_URL}/api/books`);
    if (!res.ok) throw new Error("책 데이터를 가져오지 못했습니다.");
    return res.json();
  } catch (error) {
    console.error("API 요청 실패:", error);
    throw error;
  }
}

export async function getBookById(id: string) {
  try {
    const res = await fetch(`${API_URL}/api/books/${id}`);
    if (!res.ok) throw new Error("책 정보를 가져오지 못했습니다.");
    return res.json();
  } catch (error) {
    console.error("책 정보 요청 실패:", error);
    throw error;
  }
}

export async function addBook(book: {
  title: string;
  author: string;
  stock: number;
}) {
  try {
    const res = await fetch(`${API_URL}/api/books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    if (!res.ok) throw new Error("책 추가 실패");
    return res.json();
  } catch (error) {
    console.error("책 추가 중 오류 발생:", error);
    throw error;
  }
}
