import {User} from '../../DB/model/user.model.js'
export const register = (req,res) =>{
    //get data from request
    const {username,email, password, phonenumber } = req.body
    // check user existence
    User.findOne()
    //hash password
    // addd user to DB
    // send response
    //send email

}