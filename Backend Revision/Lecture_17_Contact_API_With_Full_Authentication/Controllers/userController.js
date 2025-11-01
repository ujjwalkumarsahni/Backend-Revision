import userModel from "../Models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const userRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        if(name === "" || email === "" || password === "") {
            return res.status(400).json({ message: "All fields are required", success: false });
        }
        const userExists = await userModel.findOne({ email });
        
        if(userExists) {
            return res.status(400).json({ message: "User already exists", success: false });
        }
        const hashPassword = await bcrypt.hash(password,10);
        
        const newUser = new userModel({ name, email, password: hashPassword });
        await newUser.save();
        
        res.status(201).json({ message: "User registered successfully", success: true });

    } catch (error) {
        res.status(500).json({ message: "Register Error", success: false });
    }
}

export const userLogin = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await userModel.findOne({email});

        if(!user){
            return res.status(400).json({ message: "User Not Exist", success: false });
        }

        const validatePassword = await bcrypt.compare(password, user.password)
        if(!validatePassword) {
            return res.status(400).json({ message: "Invalid Password", success: false });
        }

        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET_KEY)

        res.status(201).json({message: "User Login successfully", token, success: true})

    } catch (error) {
        res.status(500).json({ message: "Login Error", success: false });
    }
}