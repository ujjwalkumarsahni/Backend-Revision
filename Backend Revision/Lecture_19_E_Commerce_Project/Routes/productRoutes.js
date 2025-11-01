import express from "express";
import {
  addProduct,
  deleteProductById,
  getAllProducts,
  getProductById,
  updateProductById,
} from "../Controllers/productController.js";

const productRouter = express.Router();

// add Product
// @api - /api/product/add
productRouter.post("/add", addProduct);

// get all products
productRouter.get("/all", getAllProducts);

// get product by id
productRouter.get("/:id", getProductById);

// update product by id
productRouter.put('/:id',updateProductById)

// delete product by id
productRouter.delete('/:id',deleteProductById)

export default productRouter;