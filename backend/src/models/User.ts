import { randomUUID } from "crypto";
import mongoose, { Mongoose } from "mongoose";
const chatShchema = new mongoose.Schema({
    id: {
        type: String,
        default: randomUUID()
    },
    role: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true,

    }
})
const userShchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    chats:[chatShchema],
})

export default mongoose.model("User",userShchema)