import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import upload from './config/multer.js';
import { userLogin, userRegister } from './Controllers/userController.js';

// configuring dotenv
dotenv.config();

// connect to database
connectDB();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('login'));
app.get('/register', (req, res) => res.render('register'));

// use multer middleware
app.post('/register', upload.single('file'), userRegister);
app.post('/login', userLogin);

app.listen(PORT, () => console.log(`🚀 Server is running on http://localhost:${PORT}`));
