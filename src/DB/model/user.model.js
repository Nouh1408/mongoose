import { model, Schema } from "mongoose";
import mongoose from "mongoose";

//schema
const schema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 3
    },
    email:String,
    password:String,
    phonenumber:String
},{})
//model
export const User = mongoose.model("User", schema)