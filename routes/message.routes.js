import express from "express";
import { 
    sendMessage,
    getAllMessages,
    markAsRead,
    deleteMessage
 } 
from "../controller/message.controller.js";
import { protect, isAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", sendMessage);
router.get("/", protect, isAdmin, getAllMessages);
router.put("/:id/read", protect, isAdmin, markAsRead);
router.delete("/:id", protect, isAdmin, deleteMessage);

export default router;