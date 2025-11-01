import express from 'express';
import mongoose from 'mongoose';
const app = express();

mongoose.connect('mongodb+srv://ujjwalkumar0514_db_user:rP9gHOq8K5w4JOy0@cluster0.h0fjhyg.mongodb.net/', {
    dbName: 'FormHandlerDB'
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const port = 1000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});