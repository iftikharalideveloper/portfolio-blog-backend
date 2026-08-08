import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
        description: {
            type: String,
            required: [true, "Description is required"]
        },
        techStack: {
            type:[String],
            required: true
        },
        liveLink: {
            type: String
        },
        githubLink: {
            type: String
        },
        image: {
            type: String
        },
        featured: {
            type: Boolean,
            default: false
        }
    
}, { timestamps: true });

const Project = mongoose.model("Project", projectSchema);
export default Project;
