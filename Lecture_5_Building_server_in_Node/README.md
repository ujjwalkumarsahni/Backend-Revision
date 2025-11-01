# 🌐 Building a Server in Node.js

Node.js allows you to build powerful web servers using its built-in **`http`**

---

## 🧰 1. Prerequisites

Before creating a server, ensure you have:
- **Node.js** installed → [Download](https://nodejs.org/)
- Basic knowledge of JavaScript
- A code editor like **VS Code**

To check Node version:
```bash
node -v
````

---

## ⚙️ 2. Create a Simple HTTP Server (Core Module)

Node.js includes a built-in **`http`** module for handling HTTP requests and responses.

### 📄 Example: Basic Server

```js
// server.js
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  res.end('Hello, World! This is my Node.js server.');
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
```

✅ **Run the server:**

```bash
node server.js
```

Open in your browser:
👉 [http://localhost:3000](http://localhost:3000)

---

