import { Router } from "express";
import CartControllers from "../controllers/cart.controllers.js";
import tokenValidation from "../middlewares/token.validation.js";

const cartControllers = new CartControllers();
const cartRoutes = Router();

cartRoutes.post(
  "/cart/add/:skuId",
  tokenValidation,
  cartControllers.addToCart
);
cartRoutes.get("/cart", tokenValidation, cartControllers.getCart);

export default cartRoutes;
