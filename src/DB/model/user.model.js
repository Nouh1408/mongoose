import { model, Schema } from "mongoose";
import mongoose from "mongoose";

//schema
const schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: [3, "must be at least 3 characters long"],
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    // password: { type: String, required: true }, // Uncomment this line if you want to enforce password requirement
    password: { type: String, required: true },
    phonenumber: String,
  },
  {
    timestamps: true,
  }
);
//model
export const User = mongoose.model("User", schema);
