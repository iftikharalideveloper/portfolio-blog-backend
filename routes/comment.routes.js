import express from "express";
import { createComment, getCommentsByPost, deleteComment } from "../controller/comment.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/:postId", getCommentsByPost);  // Public — sab comments dekh sakein
router.post("/:postId", protect, createComment); // Sirf logged-in user comment kare
router.delete("/:commentId", protect, deleteComment);  // Sirf logged-in (aur apna) comment delete kare

export default router;