import mongoose, { model, Schema } from "mongoose";
export const connectDB = async () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/testError")
    .then(() => {
      console.log("====================================");
      console.log("connecteed to DB");
      console.log("====================================");
    })
    .catch((err) => {
      console.log("====================================");
      console.log("fail to connect to Db", err.message);
      console.log("====================================");
    });
//   const User = model("User", new Schema({ name: String }));
//   await User.create({ name: "Ahmed" });
};
