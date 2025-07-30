import { User } from "../../DB/model/user.model.js";
export const register = async (req, res) => {
  try {
    //get data from request
    const { username, email, password, phonenumber } = req.body;
    // check user existence
    const userExist = await User.findOne({email}); //filter - projection - options(can be projection in mongoose)
    if (userExist) {
      throw new Error("User already Exist", { cause: 409 });
    }
    const createdUser = await User.create({
      username,
      email,
      password,
      phonenumber: phone,
    });
    return res.status(201).json({message:"User created Successfully", succes:false, data:createdUser})
  } catch (error) {
    return res.status(error.cause || 500).json({
      message: error.message,
      succes: false,
    });
  }

  //hash password
  // addd user to DB
  // send response
  //send email
};
