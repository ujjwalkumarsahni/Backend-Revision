import jwt from 'jsonwebtoken';
import userModel from '../Models/userModel.js';
export const isAuthenticated = async (req,res,next) =>{
    const token = req.header("Auth");
    if(!token) {
        return res.status(401).json({message: "Login First", success: false})
    }
    const decoded_token = jwt.verify(token, process.env.JWT_SECRET_KEY)
    console.log(decoded_token);
    const id = decoded_token.userId;

    const user = await userModel.findById(id);
    if(!user) {
        return res.status(401).json({message: "User not found", success: false})
    }
    req.user = user;

    next();
}