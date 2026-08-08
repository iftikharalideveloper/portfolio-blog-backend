import mongoose, {Schema} from "mongoose";

const messageSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"]
        },
        email: {
            type: String,
            required: [true, "Email is required"]
        },
        message: {
            type: String,
            required: [true, "Message is required"]
        },
        read: {
            type: Boolean,
            default: false
        }
    }, {timestamps: true}
);

const Message = mongoose.model("Message", messageSchema);
export default Message;