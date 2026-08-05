import mongoose, {Schema} from "mongoose";

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "title is required"]
        },
        content: {
            type: String,
            required: [true, "content is required"]
        },
        image: {
            type: String
        },
        category: {
            type: String,
            default: "General"
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
    },
    {timestamps:true}
);

const Post = mongoose.model("Post", postSchema);
export default Post;