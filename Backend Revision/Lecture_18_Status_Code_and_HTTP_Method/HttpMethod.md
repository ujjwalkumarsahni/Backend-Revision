# 🌍 HTTP Methods

## 🧩 What is an HTTP Method?
**HTTP Methods** (also called **HTTP Verbs**) are actions that indicate **what the client wants to do** with a specific resource on the server.

For example, when you visit a web page, submit a form, or delete data — you are using an HTTP method.

Each method tells the server **how to handle** the request.

---

## 📚 Common HTTP Methods

| Method | Description | Common Use Case |
|--------|--------------|-----------------|
| **GET** | Retrieve data from the server (read only). | Fetch a list of users or products. |
| **POST** | Send data to the server to create a new resource. | Add a new user or upload a file. |
| **PUT** | Update an existing resource completely (replace). | Replace a user’s information. |
| **PATCH** | Update part of an existing resource (modify). | Change only a user's email. |
| **DELETE** | Remove a resource from the server. | Delete a user or product. |
| **HEAD** | Similar to GET, but returns only headers (no body). | Check if a resource exists. |
| **OPTIONS** | Describes communication options for the target resource. | Used in CORS preflight requests. |

---

## 🧠 Example: CRUD Operations with HTTP Methods

| Operation | HTTP Method | Example Endpoint |
|------------|--------------|------------------|
| **Create** | POST | `/api/users` |
| **Read** | GET | `/api/users` or `/api/users/:id` |
| **Update (replace)** | PUT | `/api/users/:id` |
| **Update (partial)** | PATCH | `/api/users/:id` |
| **Delete** | DELETE | `/api/users/:id` |

---

## 💡 Example in Express.js

```js
const express = require('express');
const app = express();

app.use(express.json());

// GET - Read data
app.get('/users', (req, res) => {
  res.send('Get all users');
});

// POST - Create new data
app.post('/users', (req, res) => {
  res.send('Create a new user');
});

// PUT - Update (replace) existing data
app.put('/users/:id', (req, res) => {
  res.send(`Replace user with ID ${req.params.id}`);
});

// PATCH - Update (partial)
app.patch('/users/:id', (req, res) => {
  res.send(`Update part of user with ID ${req.params.id}`);
});

// DELETE - Remove data
app.delete('/users/:id', (req, res) => {
  res.send(`Delete user with ID ${req.params.id}`);
});
````

---

## 🧾 Summary Table

| Method     | Safe? | Idempotent? | Typical Use  |
| ---------- | ----- | ----------- | ------------ |
| **GET**    | ✅ Yes | ✅ Yes       | Fetch data   |
| **POST**   | ❌ No  | ❌ No        | Create data  |
| **PUT**    | ❌ No  | ✅ Yes       | Replace data |
| **PATCH**  | ❌ No  | ❌ No        | Modify data  |
| **DELETE** | ❌ No  | ✅ Yes       | Remove data  |

> 🧠 **Safe** means it doesn’t change data.
> 🔁 **Idempotent** means repeating the same request gives the same result.

---

### 🧩 In Short:

> **HTTP Methods** tell the server *what action* to perform on a resource —
> whether to **get**, **create**, **update**, or **delete** data.
