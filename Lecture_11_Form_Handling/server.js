import express from 'express';

const app = express();

// Middleware setup
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'Form Handling Example' });
});

app.post('/submit', (req, res) => {
    const {name,email} = req.body;
    console.log('Form Data Received:', { name, email });
    res.render('result', { name, email });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});