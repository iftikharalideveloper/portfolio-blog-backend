import mongoose,{Schema} from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    email: {
        type: String,
        required:true,
        unique:true,
    },
    password: {
        type:String,
        required:true,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
},{timestamps:true});

const User = new mongoose.model("User", userSchema);
export default User;