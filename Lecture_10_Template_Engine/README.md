# 🎨 Template Engines in Express.js

## 🧩 What is a Template Engine?

A **Template Engine** allows you to **generate dynamic HTML pages** on the server side before sending them to the client.

It helps you:
- Embed **JavaScript variables**, loops, and logic inside HTML.  
- Reuse page layouts (header, footer, etc.) easily.  
- Separate your **application logic** from your **presentation (UI)**.

---

## ⚙️ Why Use a Template Engine?

| Reason | Description |
|---------|--------------|
| **Dynamic Content** | Generate HTML dynamically based on data (like user info, product lists, etc.). |
| **Reusable Layouts** | Avoid repeating code using layouts and partials. |
| **Better Organization** | Keeps front-end (UI) and back-end (logic) cleanly separated. |
| **SEO Friendly** | Server-side rendered pages are more visible to search engines. |

---

## 🧠 Common Template Engines for Express

| Template Engine | File Extension | Description |
|------------------|----------------|--------------|
| **EJS** | `.ejs` | Most popular and easy to learn. Syntax similar to HTML + JS. |
| **Pug (Jade)** | `.pug` | Uses indentation-based syntax. Minimal and clean. |
| **Handlebars (hbs)** | `.hbs` | Similar to Mustache; good for logic-less templates. |
| **Mustache** | `.mustache` | Very lightweight and simple templating engine. |

---

## 💻 Example Using EJS

### 🔹 Step 1: Install EJS
```bash
npm install ejs
````

### 🔹 Step 2: Setup Express to Use EJS

```js
const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // Set EJS as the template engine

// Example route
app.get('/', (req, res) => {
  const user = { name: 'Alice', age: 25 };
  res.render('index', { user }); // Renders 'views/index.ejs' file
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
```

### 🔹 Step 3: Create `views/index.ejs`

```html
<!DOCTYPE html>
<html>
<head>
  <title>EJS Example</title>
</head>
<body>
  <h1>Welcome <%= user.name %>!</h1>
  <p>Age: <%= user.age %></p>
</body>
</html>
```

> 🧩 `<%= %>` is used to print data dynamically inside the template.

---

### Step 2: Setup Pug in Express

```js
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { title: 'Pug Example', message: 'Hello from Pug!' });
});
```



