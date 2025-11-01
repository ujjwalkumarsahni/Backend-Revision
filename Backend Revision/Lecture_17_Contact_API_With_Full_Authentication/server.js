import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./Routes/userRoutes.js";
import contactRouter from "./Routes/contactRoutes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Connect to MongoDB
connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// home route
app.get("/", (req, res) => res.send("Welcome to Contact API with Full Authentication"));


// user routes
app.use("/api/users",userRouter);

app.use('/api/contact', contactRouter);


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));