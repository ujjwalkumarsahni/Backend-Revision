# 📤 Sending Responses in Express.js

## 🧩 What is a Response?

A **response** is what your Express server sends back to the **client** (like a browser or API consumer) after processing a request.  

When a client sends a request (using GET, POST, PUT, DELETE, etc.), the server handles it and **responds** using the `res` object.

---

## ⚙️ HTTP Methods and Response Types

| HTTP Method | Purpose | Typical Response | Example |
|--------------|----------|------------------|----------|
| **GET** | Read or fetch data | Send data (JSON, HTML, text, etc.) | `res.json(users)` or `res.send('Hello')` |
| **POST** | Create new data | Confirmation or created object | `res.status(201).json(newUser)` |
| **PUT / PATCH** | Update existing data | Updated object or success message | `res.json(updatedUser)` |
| **DELETE** | Remove data | Confirmation message or deleted object | `res.json({ message: 'Deleted' })` |

---

## 🧠 Common Response Methods in Express

| Method | Description | Example |
|---------|--------------|----------|
| `res.send()` | Sends text, HTML, or JSON automatically based on content | `res.send('Hello World!')` |
| `res.json()` | Sends JSON response (used for APIs) | `res.json({ name: 'John', age: 25 })` |
| `res.status()` | Sets HTTP status code before sending a response | `res.status(404).send('Not Found')` |
| `res.sendFile()` | Sends a file as response | `res.sendFile(__dirname + '/index.html')` |
| `res.redirect()` | Redirects client to another URL | `res.redirect('/home')` |
| `res.end()` | Ends response (used in low-level handling) | `res.end('Done')` |

---