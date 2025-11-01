import express from 'express';
import path from 'path';
const app = express();

app.use(express.json());

// get all products
const products = [
  { id: 1, name: "Product A", price: 100 },
  { id: 2, name: "Product B", price: 150 },
  { id: 3, name: "Product C", price: 200 },
]; 
 
app.get('/', (req, res) => {
// send json data
//   res.json({ message: "Get All Products", products});

// send html tag data
    // res.send('<h1>Hello this is hadding tag</h1>')

// send html file
    const dir = path.resolve();
    const url = path.join(dir, './index.html');
    res.sendFile(url);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});