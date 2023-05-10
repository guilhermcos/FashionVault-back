import { Router } from "express";
import checkoutControllers from "../controllers/checkout.controllers.js"
import tokenValidation from "../middlewares/token.validation.js";

const checkoutRoutes = Router()


export default checkoutRoutes