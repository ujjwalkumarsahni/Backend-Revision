# 📦 What is a Module in Node.js?

A **Module** in **Node.js** is a **reusable block of code** that performs a specific task or functionality.  
Each JavaScript file in a Node.js application is treated as a **separate module**.

---

## 🧠 Why Use Modules?

**Modules help developers:**
- ✅ Keep code organized  
- 🔁 Avoid code duplication  
- ♻️ Reuse functionality across files  
- 🧩 Make code easier to maintain and test  

💡 Think of a module like a **“building block”** — you can create small pieces of code and connect them together to build a complete application.

---

## ⚙️ Types of Modules in Node.js

There are **three main types** of modules in Node.js:

---

### 🧱 1. Core Modules (Built-in Modules)

These modules come **pre-installed** with Node.js.  
You can use them **without any extra installation**.

**Examples:**
- `fs` → File System operations (read/write files)
- `http` → Create web servers
- `path` → Handle file paths
- `os` → System-related information
- `events` → Event-driven programming

**Example:**
```js
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
````

---

### 🧩 2. Local (User-Defined) Modules

These are modules that **you create yourself** in your project.
They allow you to **split your code** into smaller, reusable files.

**Example:**

```js
// math.js
function add(a, b) {
  return a + b;
}
module.exports = add;
```

```js
// app.js
const add = require('./math');
console.log(add(5, 10)); // Output: 15
```

---

### 🌍 3. Third-Party Modules

These are **external modules** created by others and shared via **npm (Node Package Manager)**.
You must install them before using.

**Example:**

```bash
npm install lodash
```

```js
const _ = require('lodash');
console.log(_.upperCase('hello world')); // Output: HELLO WORLD
```

---

## 📤 Exporting and Importing Modules

Node.js supports **two module systems**:

1. **CommonJS** (default)
2. **ES Modules** (modern JavaScript style)

---

### ⚡ 1. CommonJS (`require` / `module.exports`)

#### ➡️ Export

Use `module.exports` or `exports` to share code from one file.

```js
// greetings.js
function sayHello(name) {
  return `Hello, ${name}!`;
}

module.exports = sayHello;
```

#### ⬅️ Import

Use `require()` to import a module.

```js
// app.js
const sayHello = require('./greetings');

console.log(sayHello('Alice')); // Output: Hello, Alice!
```

---

#### 🧩 Export Multiple Values

```js
// user.js
const name = "John";
const age = 25;

function greet() {
  return `Hi, I'm ${name}`;
}

module.exports = { name, age, greet };
```

```js
// app.js
const user = require('./user');

console.log(user.name);    // John
console.log(user.greet()); // Hi, I'm John
```

---

### 🌐 2. ES Modules (`import` / `export`)

Modern syntax supported in Node.js **(v14+)**.
To use ES Modules, either:

* Use the `.mjs` file extension **OR**
* Add `"type": "module"` in your `package.json`

---

#### ➡️ Export

```js
// math.mjs
export function add(a, b) {
  return a + b;
}

export const PI = 3.14;
```

#### ⬅️ Import

```js
// app.mjs
import { add, PI } from './math.mjs';

console.log(add(2, 3)); // Output: 5
console.log(PI);        // Output: 3.14
```

---

#### 🌟 Default Export

```js
// logger.mjs
export default function log(msg) {
  console.log(`[LOG]: ${msg}`);
}
```

```js
// app.mjs
import log from './logger.mjs';
log('Server started'); // Output: [LOG]: Server started
```