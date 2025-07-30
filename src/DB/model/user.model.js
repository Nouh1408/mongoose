import { model, Schema } from "mongoose";
//schema
const schema = new Schema({
    username: String,
    email:String,
    password:String
},{})
//model
export  const User = model("User", schema)