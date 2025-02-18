import express from "express";
import cors from "cors";
import bookRouter from "./routes/bookRouters";

const app = express();

// middleware setup
app.use(cors());
app.use(express.json()); // JSON 요청 본문을 파싱

// registering router
app.use("/api/books", bookRouter); // "/api/books" 경로로 bookRouter 연결

// set the route (`/`) for default
app.get("/", (req, res) => {
  res.send("📚 Welcome to the Online Bookstore API! 🚀");
});

// running the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
