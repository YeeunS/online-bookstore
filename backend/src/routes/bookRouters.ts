import express from "express";
import * as bookController from "../controllers/bookController";

const router = express.Router();

router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById); // ✅ 정상 작동
router.post("/", bookController.createBook);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

export default router;
