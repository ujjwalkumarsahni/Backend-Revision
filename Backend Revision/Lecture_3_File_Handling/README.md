# 📂 File Handling in Node.js

File handling in Node.js allows you to **create, read, update, delete, and manage files** directly from the server-side.  
This is possible using Node’s built-in **`fs` (File System)** module.

---

## 🧰 1. Importing the `fs` Module

Before performing any file operations, include the `fs` module:

```js
const fs = require('fs');
````

---

## 📖 2. Reading Files

### **a. Asynchronous Read**

```js
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});
```

### **b. Synchronous Read**

```js
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);
```

🧠 **Tip:**
Use **asynchronous** methods in production to avoid blocking the event loop.

---

## ✍️ 3. Writing Files

### **a. Asynchronous Write**

```js
fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully!');
});
```

### **b. Synchronous Write**

```js
fs.writeFileSync('example.txt', 'Hello, Node.js!');
```

🧩 **Note:**
`writeFile` will **overwrite** existing content.
Use `fs.appendFile()` to add data instead.

---

## ➕ 4. Appending Data to Files

```js
fs.appendFile('example.txt', '\nAppended text.', (err) => {
  if (err) {
    console.error('Error appending to file:', err);
    return;
  }
  console.log('Data appended successfully!');
});
```

---

## 🗑️ 5. Deleting Files

```js
fs.unlink('example.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }
  console.log('File deleted successfully!');
});
```

---

## 🏗️ 6. Working with Directories

### **a. Create a Directory**

```js
fs.mkdir('new-folder', (err) => {
  if (err) throw err;
  console.log('Directory created!');
});
```

### **b. Read a Directory**

```js
fs.readdir('.', (err, files) => {
  if (err) throw err;
  console.log('Files in current directory:', files);
});
```

### **c. Remove a Directory**

```js
fs.rmdir('new-folder', (err) => {
  if (err) throw err;
  console.log('Directory removed!');
});
```

---

## 🔍 7. Checking File or Directory Status

```js
fs.stat('example.txt', (err, stats) => {
  if (err) throw err;
  console.log(stats);
  console.log('Is file:', stats.isFile());
  console.log('Is directory:', stats.isDirectory());
});
```

---

## ⚙️ 8. Renaming Files

```js
fs.rename('example.txt', 'newName.txt', (err) => {
  if (err) throw err;
  console.log('File renamed successfully!');
});
```

---

## 🚀 9. Using Promises with `fs.promises`

Node.js also provides a **promise-based API** for cleaner async code.

```js
const fs = require('fs').promises;

async function readFileAsync() {
  try {
    const data = await fs.readFile('example.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readFileAsync();
```

---

## 🧩 10. File Streams

For large files, **streams** are more efficient than reading the whole file at once.

### **Read Stream**

```js
const readStream = fs.createReadStream('largeFile.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
  console.log('File reading completed.');
});
```

### **Write Stream**

```js
const writeStream = fs.createWriteStream('output.txt');
writeStream.write('Hello Stream!');
writeStream.end();

writeStream.on('finish', () => {
  console.log('Write completed.');
});
```

---

## 💡 Summary

| Operation        | Method                             | Description                      |
| ---------------- | ---------------------------------- | -------------------------------- |
| Read file        | `fs.readFile`, `fs.readFileSync`   | Reads file contents              |
| Write file       | `fs.writeFile`, `fs.writeFileSync` | Writes or overwrites data        |
| Append file      | `fs.appendFile`                    | Adds data to the end of file     |
| Delete file      | `fs.unlink`                        | Removes file                     |
| Create directory | `fs.mkdir`                         | Creates a new folder             |
| Read directory   | `fs.readdir`                       | Lists files/folders              |
| Remove directory | `fs.rmdir`                         | Deletes folder                   |
| Rename file      | `fs.rename`                        | Renames file or directory        |
| File stats       | `fs.stat`                          | Checks file or folder properties |

---

## 🧠 Best Practices

* Always use **asynchronous methods** in production.
* Handle **errors properly** with `try...catch` or error callbacks.
* Use **streams** for large files to improve performance.
* Prefer **`fs.promises`** for modern async/await syntax.

---

