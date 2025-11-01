import express from "express";
import {
  addToCart,
  clearCart,
  decreaseProductQty,
  removeProductFromCart,
  userCart,
} from "../Controllers/cartController.js";
import { isAuthenticated } from "../Middlewares/auth.js";

const cartRouter = express.Router();

// add to cart
// @api - /api/cart/add
cartRouter.post("/add", isAuthenticated, addToCart);

// get user cart
cartRouter.get("/user", isAuthenticated, userCart);

// remove product from cart
cartRouter.delete("/remove/:productId",isAuthenticated, removeProductFromCart);

// clear cart
cartRouter.delete('/clear',isAuthenticated,clearCart)

// decrease qty
cartRouter.post('/--qty',isAuthenticated,decreaseProductQty)

export default cartRouter;