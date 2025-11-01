import express from 'express';
import connectDB from './config/db.js';
import upload from './config/multer.js';
import { imageUploader } from './Controllers/imageController.js';
const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index', { url: null }));
app.post('/upload-image', upload.single('file'), imageUploader)

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));