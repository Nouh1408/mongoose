import mongoose from "mongoose";
export default function connectDB(){
    mongoose.connect('mongodb://127.0.0.1:27017/football').then(()=>{
    console.log('====================================');
    console.log("connecteed to DB");
    console.log('====================================');
}).catch((err)=>{
    console.log('====================================');
    console.log("fail to connect to Db",err.message);
    console.log('====================================');
})
}
