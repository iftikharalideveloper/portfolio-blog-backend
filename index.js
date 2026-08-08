import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import { connDB } from "./database/database.js";
// auth Routes
import authRoutes from "./routes/auth.routes.js";
// post routes
import postRoutes from "./routes/post.routes.js";
//comment routes
import commentRoutes from "./routes/comment.routes.js";
//project routes
import projectRoutes from "./routes/project.routes.js";


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


const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Server is running on port: http://localhost:${port}`);
});