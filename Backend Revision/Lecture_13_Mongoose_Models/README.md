# 📖 What is a Model?
A **Model** defines the structure of your data and how it interacts with the database.  
It acts as the **blueprint** for your documents in MongoDB.

In **Mongoose**, a model is created using a **Schema** that defines fields, data types, and validation rules.

### 🧩 Example: `models/userModel.js`

```js
const mongoose = require('mongoose');

// Define schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Create and export model
const User = mongoose.model('User', userSchema);
module.exports = User;
````

---

## 🧠 How It Works

* The **Schema** defines the structure of each document in MongoDB.
* The **Model** provides methods to perform CRUD operations.
* You can easily create, read, update, or delete data using simple Mongoose functions.

#### Example Usage:

```js
const User = require('./models/userModel');

// Create user
const newUser = new User({ name: 'John', email: 'john@example.com', password: '12345' });
await newUser.save();

// Get all users
const users = await User.find();
```

---
# 📖 What is a Controller?

A **Controller** handles all the **logic** for your routes.
It connects user requests (from routes) with the **Model** and sends back the appropriate **response** (HTML, JSON, or redirect).

---

### 🏗 Example: `controllers/userController.js`

```js
const User = require('../models/userModel');

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.redirect('/users');
  } catch (error) {
    res.status(400).send('Error creating user');
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.render('users', { users });
};
```

---

## 🧭 3. How Models and Controllers Work Together

| Step | Component      | Description                                       |
| ---- | -------------- | ------------------------------------------------- |
| 1️⃣  | **Route**      | Defines the URL and HTTP method (GET, POST, etc.) |
| 2️⃣  | **Controller** | Executes logic (create, read, update, delete)     |
| 3️⃣  | **Model**      | Interacts with MongoDB                            |
| 4️⃣  | **View (EJS)** | Displays data to the user                         |

---

### 🧩 Example Integration in `server.js`

```js
const express = require('express');
const app = express();
const userController = require('./controllers/userController');

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Routes
app.post('/submit', userController.createUser);
app.get('/users', userController.getAllUsers);
```

---




