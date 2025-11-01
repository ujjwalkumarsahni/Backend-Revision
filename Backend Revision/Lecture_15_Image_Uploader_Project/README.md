## ☁️ Cloudinary

**Cloudinary** is a cloud-based media management service used to **store**, **optimize**, and **deliver** images and videos.  
It helps developers easily upload files from their apps and get back a **secure URL** to display or save in a database.

### 🔹 Key Features
- Store images, videos, and other files online.  
- Automatically resize, crop, or compress images.  
- Provide fast delivery through a global CDN.  
- Supports secure uploads with API keys.

### 🧠 Example Use
When a user uploads a profile picture, your app sends the file to **Cloudinary**, and Cloudinary returns a **URL** that you can save in your database.

---

## 📦 Multer

**Multer** is a Node.js middleware used with **Express** to handle `multipart/form-data` — the format used for uploading files via forms.

### 🔹 Key Features
- Handles file uploads from client forms.  
- Saves uploaded files either to **disk** or **memory**.  
- Works easily with file storage services like **Cloudinary** or **AWS S3**.  

### 🧠 Example Use
When a user uploads a file from a web form, **Multer** processes it temporarily on the server before sending it to a cloud service (like Cloudinary).

---

## ⚙️ Installation

```bash
npm install express multer cloudinary dotenv streamifier
````

---

## 🧩 Setup

### 1. Create `.env`

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 2. Configure Cloudinary (`config/cloudinary.js`)

```js
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
```

### 3. Configure Multer (`middlewares/multer.js`)

```js
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

export default upload;
```

### 4. Upload Route (`routes/upload.js`)

```js
import express from "express";
import upload from "../middlewares/multer.js";
import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

const router = express.Router();

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const streamUpload = (buffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((err, result) => {
          if (result) resolve(result);
          else reject(err);
        });
        streamifier.createReadStream(buffer).pipe(stream);
      });
    };

    const result = await streamUpload(req.file.buffer);
    res.json({ url: result.secure_url });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
```

### 5. App Setup (`app.js`)

```js
import express from "express";
import uploadRoutes from "./routes/upload.js";

const app = express();
app.use("/api", uploadRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
```

---

## 🖼️ Example Form

```html
<form action="/api/upload" method="post" enctype="multipart/form-data">
  <input type="file" name="image" />
  <button type="submit">Upload</button>
</form>
```
