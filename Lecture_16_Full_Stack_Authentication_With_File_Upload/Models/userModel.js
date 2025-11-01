import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    filename: String,
    public_id: String,
    imageUrl: String,
});

const userModel = mongoose.model('user', userSchema);

export default userModel;