const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

const DATA_FILE = './data.json';

// C = create --> POST (method)
// R = read   --> GET (method)
// U = update --> PUT (method)
// D = delete --> DELETE (method)

// Helper: Read data from file
function readData() {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// Helper: Write data to file
function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// Create
app.post('/items', (req, res) => {
  const items = readData();
  const newItem = { id: Date.now(), ...req.body };
  items.push(newItem);
  writeData(items);
  res.json(newItem);
});

// Read
app.get('/items', (req, res) => {
  const items = readData();
  res.json(items);
});

// Update
app.put('/items/:id', (req, res) => {
  const items = readData();
  const itemId = parseInt(req.params.id);
  const index = items.findIndex(item => item.id === itemId);

  if (index !== -1) {
    items[index] = { id: itemId, ...req.body };
    writeData(items);
    res.json(items[index]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Delete
app.delete('/items/:id', (req, res) => {
  const items = readData();
  const itemId = parseInt(req.params.id);
  const filtered = items.filter(item => item.id !== itemId);

  if (filtered.length !== items.length) {
    writeData(filtered);
    res.json({ message: 'Item deleted' });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

app.get('/', (req, res) => res.send('File-based API working'));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
