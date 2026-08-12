import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

import { connDB } from "./database/database.js";

// Auth Routes
import authRoutes from "./routes/auth.routes.js";

// Post Routes
import postRoutes from "./routes/post.routes.js";

// Comment Routes
import commentRoutes from "./routes/comment.routes.js";

// Project Routes
import projectRoutes from "./routes/project.routes.js";

// Message Routes
import messageRoutes from "./routes/message.routes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

connDB();

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/messages", messageRoutes);

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port: ${port}`);
});
