import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./Routes/userRoutes.js";
import productRouter from "./Routes/productRoutes.js";
import cartRouter from "./Routes/cartRoutes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Connect to MongoDB
connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// home route
app.get("/", (req, res) => res.send("Welcome to E-commerce app"));


// user router
app.use('/api/user',userRouter)

// product router
app.use('/api/product',productRouter)

// cart router
app.use('/api/cart',cartRouter)


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));