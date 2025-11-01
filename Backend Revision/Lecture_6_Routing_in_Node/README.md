# 🧭 Routing in Node.js

Routing in Node.js refers to determining how an application responds to a client request to a particular endpoint (URI) and HTTP method (GET, POST, etc.).  
It’s the backbone of handling different requests and defining application behavior for each route.

---

In Node.js, routing allows us to map incoming HTTP requests to specific code logic.  
For example:
- `GET /` → Homepage
- `GET /about` → About Page
- `POST /login` → Handle login form submission

There are **two main approaches** to routing:
1. Using Node’s built-in `http` module  
2. Using the **Express.js** framework for cleaner and modular routing

---

## ⚙️ Basic Routing with HTTP Module

You can create routes manually using Node’s native `http` module.

### Example:

```js
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('Welcome to the Home Page!');
  } else if (req.url === '/about' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('This is the About Page.');
  } else {
    res.statusCode = 404;
    res.end('404 - Page Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});