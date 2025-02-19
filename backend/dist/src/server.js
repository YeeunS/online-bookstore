"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const bookRouters_1 = __importDefault(require("./routes/bookRouters"));
const app = (0, express_1.default)();
// middleware setup
app.use((0, cors_1.default)());
app.use(express_1.default.json()); // JSON 요청 본문을 파싱
// registering router
app.use("/api/books", bookRouters_1.default); // "/api/books" 경로로 bookRouter 연결
// set the route (`/`) for default
app.get("/", (req, res) => {
    res.send("📚 Welcome to the Online Bookstore API! 🚀");
});
// running the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
