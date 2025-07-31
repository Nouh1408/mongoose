//ctrl requests
import {connectDB} from "./DB/connection.js"
import authRouter from "./module/auth/auth.controller.js"
export default function bootstrap(app,express){
    connectDB()
    app.use(express.json())
    app.use('/auth', authRouter)
     //

}