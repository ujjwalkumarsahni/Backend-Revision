import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    fileName: String,
    public_id: String,
    imageUrl: String,
});

const imageModel = mongoose.model('Image', imageSchema);

export default imageModel;