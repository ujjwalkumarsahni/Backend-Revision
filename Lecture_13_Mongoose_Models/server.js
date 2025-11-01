import express from 'express';
import mongoose from 'mongoose';
import { getAllUsers, userRegister } from './controllers/userController.js';
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://ujjwalkumar0514_db_user:rP9gHOq8K5w4JOy0@cluster0.h0fjhyg.mongodb.net/', {
    dbName: 'FormHandlerDB'
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit', userRegister);

app.get('/users', getAllUsers);


const PORT = 2000;
app.listen(PORT, () => {
    console.log("server running on port :", PORT);
});
    

