import fs from "fs";
import cloudinary from "../config/cloudinary.js";
import userModel from "../Models/userModel.js";

export const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Multer saves uploaded file in req.file
    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }

    // Upload local file path to Cloudinary
    const cloudinaryFile = await cloudinary.uploader.upload(req.file.path, {
      folder: "Authentication_Files",
    });

    // Create user in MongoDB
    const newUser = new userModel({
      name,
      email,
      password,
      fileName: req.file.originalname,
      public_id: cloudinaryFile.public_id,
      imageUrl: cloudinaryFile.secure_url,
    });

    await newUser.save();

    // Delete file from local storage after successful upload
    fs.unlink(req.file.path, (err) => {
      if (err) console.error("Error deleting local file:", err);
      else console.log("Local file deleted:", req.file.path);
    });

    res.redirect("/");
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).send("Server Error");
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({email});

    if (!user) {
      return res.render('login', { error: 'Invalid email or password' });
    }else if(user.password !== password){
      return res.render('login', { error: 'Invalid email or password' });
    }
    // console.log(user);
    res.render('profil', { user });

    } catch (error) {
    console.error("Error during user login:", error);
    res.send("Server Error");
  }
};
