import express from 'express';

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs', { text: 'Hello, EJS Template Engine!' });
});
const port = 1000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});