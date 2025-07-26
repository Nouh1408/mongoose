//ctrl requests
import connectDB from "./DB/connection.js"
export default function bootstrap(app,express){
    connectDB()
    app.use(express.json())

}