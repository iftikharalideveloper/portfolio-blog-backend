import express from "express";
import {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "../controller/project.controller.js";
import { protect, isAdmin } from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.post("/", protect, isAdmin, createProject);
router.put("/:id", protect, isAdmin, updateProject);
router.delete("/:id", protect, isAdmin, deleteProject);

export default router;
