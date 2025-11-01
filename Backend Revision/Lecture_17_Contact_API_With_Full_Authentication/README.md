# 🧩 What is Middleware?
**Middleware** is a function that has access to the **request (req)**, **response (res)**, and the **next** middleware function in the application’s request-response cycle.

### ✅ Why Use Middleware?
- To execute code **before** sending a response.  
- To **modify** request or response objects.  
- To **handle errors** globally.  
- To **log** requests or implement **authentication**.  
- To add **custom behavior** like rate limiting, CORS, etc.

### 🧠 Example:
```js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // passes control to the next middleware
});
````

---

## 🚏 What are Routes?

**Routes** define how the application responds to a client request to a particular **endpoint (path + HTTP method)**.

### ✅ Why Use Routes?

* To **organize** different parts of the application (e.g., `/users`, `/products`).
* To make code **modular and readable**.
* To **separate concerns** (business logic vs. request handling).

### 🧠 Example:

```js
app.get('/users', (req, res) => {
  res.send('List of users');
});
```

Or using **Express Router**:

```js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('User route');
});

module.exports = router;
```

---

## 🛠️ Common Node.js Packages

### 🔐 1. jsonwebtoken (JWT)

Used for **authentication and authorization**.

#### ✅ Why Use:

* To securely **transmit user data** between client and server.
* Commonly used to **protect routes** and **verify identity**.

#### 🧠 Example:

```js
const jwt = require('jsonwebtoken');

// Create token
const token = jwt.sign({ id: user._id }, 'secretKey', { expiresIn: '1h' });

// Verify token
const decoded = jwt.verify(token, 'secretKey');
```

---

### 🔑 2. bcryptjs

Used for **hashing passwords** before saving them to a database.

#### ✅ Why Use:

* To **securely store** passwords (never save plain text).
* Protects against attacks like **rainbow tables** and **dictionary attacks**.

#### 🧠 Example:

```js
const bcrypt = require('bcryptjs');

// Hash password
const hashed = await bcrypt.hash('myPassword', 10);

// Compare password
const isMatch = await bcrypt.compare('myPassword', hashed);
```

---

### ⚙️ 3. dotenv

Used to **manage environment variables** in a `.env` file.

#### ✅ Why Use:

* Keeps sensitive data (like API keys, DB URLs, JWT secrets) **out of code**.
* Makes configuration **flexible and secure**.

#### 🧠 Example:

```js
require('dotenv').config();

const db = process.env.DB_URL;
console.log('Database URL:', db);
```

`.env` file:

```
DB_URL=mongodb://localhost:27017/myapp
JWT_SECRET=mysecretkey
```

---

### 🌐 4. cors

**CORS (Cross-Origin Resource Sharing)** middleware allows your server to handle requests from **different domains**.

#### ✅ Why Use:

* To allow **frontend and backend** on different origins (e.g., React app → Express API).
* To prevent **CORS policy errors** in browsers.

#### 🧠 Example:

```js
const cors = require('cors');
app.use(cors());
```

You can also restrict it:

```js
app.use(cors({ origin: 'http://localhost:3000' }));
```

---

## 🧾 Summary Table

| Concept / Package | Purpose                               | Example Use        |
| ----------------- | ------------------------------------- | ------------------ |
| **Middleware**    | Run code between request and response | Logging, Auth      |
| **Routes**        | Handle specific URLs                  | `/users`, `/posts` |
| **jsonwebtoken**  | Create and verify tokens              | User login         |
| **bcryptjs**      | Hash passwords                        | Signup/Login       |
| **dotenv**        | Manage environment variables          | `.env` configs     |
| **cors**          | Allow cross-origin requests           | React ↔ API        |

---
