import { model, Schema } from "mongoose";
import mongoose from "mongoose";

//schema
const schema = new Schema({
    username: String,
    email:String,
    password:String,
    phonenumber:String
},{})
//model
export const User = mongoose.model("User", schema)