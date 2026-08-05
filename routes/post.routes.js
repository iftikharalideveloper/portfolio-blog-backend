//1st
import express from "express";
//2nd controller functions
import {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} from "../controller/post.controller.js";
//3rd authmiddleware to protect routes from illegal user
import { protect, isAdmin } from "../middleware/auth.middleware.js";
//4 router bano
const router = express.Router();
//5 route aik aik karke banana he.
// public route, get read all, and by id. show publicaly each post
router.get("/", getAllPosts);
router.get("/:id", getPostById);
//create
router.post("/", protect, isAdmin, createPost);
//update
router.put("/:id", protect, isAdmin, updatePost);
// delete
router.delete("/:id", protect, isAdmin, deletePost);

export default router;
