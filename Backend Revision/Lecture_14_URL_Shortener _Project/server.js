import express from 'express';
import { shortenUrl, getOriginalUrl } from './Controllers/urlController.js';
import mongoose, { get } from 'mongoose';
const app = express();
const PORT = 3000;


// Connect to MongoDB
mongoose.connect('mongodb+srv://ujjwalkumar0514_db_user:rP9gHOq8K5w4JOy0@cluster0.h0fjhyg.mongodb.net/', {
    dbName: 'URLShortenerDB',
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index', {shortUrl: null});
});
app.post('/shorten', shortenUrl);
app.get('/:shortId', getOriginalUrl);
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));