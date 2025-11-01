# 🛤️ Path Module in Node.js

The **Path Module** in Node.js provides utilities for working with **file and directory paths**.  
It helps handle file system paths in a **platform-independent way** (works on Windows, macOS, and Linux seamlessly).

---

## 📦 1. Importing the `path` Module

To use the Path module:

```js
const path = require('path');
````

✅ The `path` module is **built-in**, so no installation is required.

---

## 🧩 2. Why Use the Path Module?

File paths differ between operating systems:

* **Windows:** `C:\Users\Admin\Documents`
* **Linux/macOS:** `/home/admin/Documents`

Using the `path` module ensures your code works **cross-platform** by handling these differences automatically.

---

## 🧭 3. Commonly Used Methods

Here are the most frequently used methods of the `path` module:

---

### 🧱 `path.basename(path[, ext])`

Returns the **last portion** (file name) of a path.

```js
const filePath = '/users/john/documents/report.txt';
console.log(path.basename(filePath));      // 👉 'report.txt'
console.log(path.basename(filePath, '.txt')); // 👉 'report'
```

---

### 📂 `path.dirname(path)`

Returns the **directory name** of a path.

```js
const filePath = '/users/john/documents/report.txt';
console.log(path.dirname(filePath)); // 👉 '/users/john/documents'
```

---

### 🧩 `path.extname(path)`

Returns the **file extension** of a path.

```js
const filePath = '/users/john/documents/report.txt';
console.log(path.extname(filePath)); // 👉 '.txt'
```

---

### 🔗 `path.join([...paths])`

Joins all given path segments using the platform-specific separator
and **normalizes** the resulting path.

```js
const fullPath = path.join('users', 'john', 'docs', 'file.txt');
console.log(fullPath); // 👉 'users/john/docs/file.txt'
```

🧠 **Note:** Automatically handles extra slashes and resolves relative segments.

```js
console.log(path.join('/users', 'john', '../mary', 'notes.txt'));
// 👉 '/users/mary/notes.txt'
```

---

### 🧭 `path.resolve([...paths])`

Resolves a sequence of paths into an **absolute path**.

```js
console.log(path.resolve('folder', 'subfolder', 'file.txt'));
// 👉 '/current/working/directory/folder/subfolder/file.txt'
```

If the path starts with `/`, Node treats it as absolute and stops resolving.

---

### 🧱 `path.normalize(path)`

Normalizes a given path by correcting `..`, `.`, and duplicate slashes.

```js
console.log(path.normalize('/users/john//docs/../file.txt'));
// 👉 '/users/john/file.txt'
```

---

### ⚙️ `path.parse(path)`

Returns an **object** containing details about the path.

```js
const info = path.parse('/users/john/docs/file.txt');
console.log(info);
```

Output:

```js
{
  root: '/',
  dir: '/users/john/docs',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
```

---

### 🧠 `path.format(pathObject)`

Creates a path string from an object (reverse of `path.parse()`).

```js
const filePath = path.format({
  dir: '/users/john/docs',
  name: 'file',
  ext: '.txt'
});
console.log(filePath); // 👉 '/users/john/docs/file.txt'
```

---

### ⚡ `path.isAbsolute(path)`

Checks whether a given path is **absolute**.

```js
console.log(path.isAbsolute('/users/john')); // 👉 true
console.log(path.isAbsolute('docs/file.txt')); // 👉 false
```

---

### 📏 `path.relative(from, to)`

Returns the **relative path** from one directory to another.

```js
console.log(path.relative('/users/john/docs', '/users/john/images'));
// 👉 '../images'
```

---

### ⚙️ `path.sep`

Returns the **path separator** used by the operating system:

```js
console.log(path.sep); // 👉 '\' on Windows, '/' on POSIX
```

---

### 🪟 `path.delimiter`

Returns the **path delimiter** (used in environment variables):

```js
console.log(path.delimiter); // 👉 ';' on Windows, ':' on POSIX
```

Example:

```js
console.log(process.env.PATH.split(path.delimiter));
```

---

## 🧭 4. Example: Building File Paths Safely

Instead of hardcoding paths:

```js
const filePath = 'C:\\Users\\John\\file.txt'; // ❌ Bad practice
```

Use the `path` module:

```js
const path = require('path');

const filePath = path.join(__dirname, 'data', 'notes.txt');
console.log(filePath); // ✅ Works on all OS
```

---

## 🧮 5. Difference Between `path.join()` and `path.resolve()`

| Feature              | `path.join()` | `path.resolve()`       |
| -------------------- | ------------- | ---------------------- |
| Purpose              | Joins paths   | Resolves absolute path |
| Output               | Relative path | Absolute path          |
| Starts at root (`/`) | No            | Yes                    |
| Handles `..` and `.` | Yes           | Yes                    |

Example:

```js
path.join('/a', '/b');     // '/a/b'
path.resolve('/a', '/b');  // '/b'
```

---

## 🧠 6. Useful Constants

| Constant         | Description            | Example Output                |
| ---------------- | ---------------------- | ----------------------------- |
| `path.sep`       | Path separator         | `/` (POSIX) or `\` (Windows)  |
| `path.delimiter` | Env path delimiter     | `:` (POSIX) or `;` (Windows)  |
| `__dirname`      | Current directory path | `/home/user/project`          |
| `__filename`     | Current file path      | `/home/user/project/index.js` |

---

## 🧪 7. Example: Complete Usage

```js
const path = require('path');

const filePath = path.join(__dirname, 'public', 'assets', 'image.png');

console.log('Full Path:', filePath);
console.log('Base Name:', path.basename(filePath));
console.log('Directory Name:', path.dirname(filePath));
console.log('Extension:', path.extname(filePath));
console.log('Is Absolute:', path.isAbsolute(filePath));

const parsed = path.parse(filePath);
console.log('Parsed Object:', parsed);

const formatted = path.format(parsed);
console.log('Reformatted Path:', formatted);
```

---

## ⚙️ 8. Summary

| Method              | Description                       |
| ------------------- | --------------------------------- |
| `path.basename()`   | Returns filename                  |
| `path.dirname()`    | Returns directory name            |
| `path.extname()`    | Returns file extension            |
| `path.join()`       | Joins paths correctly             |
| `path.resolve()`    | Returns absolute path             |
| `path.normalize()`  | Cleans up a path                  |
| `path.parse()`      | Returns an object with path info  |
| `path.format()`     | Rebuilds a path from an object    |
| `path.isAbsolute()` | Checks if path is absolute        |
| `path.relative()`   | Returns relative path between two |
| `path.sep`          | OS-specific separator             |
| `path.delimiter`    | OS-specific delimiter             |

---


