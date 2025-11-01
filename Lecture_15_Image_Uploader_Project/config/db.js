import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://ujjwalkumar0514_db_user:rP9gHOq8K5w4JOy0@cluster0.h0fjhyg.mongodb.net/', {dbName: 'ImageUploaderDB'})
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};
export default connectDB;