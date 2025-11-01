import cloudinary from "../config/cloudinary.js";
import imageModel from "../Models/imageModel.js";
import fs from 'fs';
export const imageUploader =  async (req, res) => {
    const file = req.file.path
    const cloudinaryFile = await cloudinary.uploader.upload(file, {
        folder: 'ImageUploaderProject',
    });

    const newImage = new imageModel({
        fileName: req.file.filename,
        public_id: cloudinaryFile.public_id,
        imageUrl: cloudinaryFile.secure_url,
    });
    await newImage.save();

    // Delete file from local system after successful upload
    fs.unlink(req.file.path, (err) => {
        if (err) console.error('Error deleting local file:', err);
        else console.log('🗑 Local file deleted:', req.file.path);
    });

    res.render('index', { url: cloudinaryFile.secure_url });
}