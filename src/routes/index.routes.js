import { Router } from "express";
import authRouter from "./auth.routes.js";
import createRoute from "./CREATEDB.routes.js";
import productRouter from "./product.routes.js";
import cartRoutes from "./cart.routes.js";
import checkoutRoutes from "./checkout.routes.js";
import ordersRoutes from "./order.routes.js";
import userRouter from "./user.routes.js";

const router = Router();

router.use([authRouter, cartRoutes, checkoutRoutes, ordersRoutes]);
router.use(productRouter);
router.use(userRouter);
router.use(createRoute);


export default router;
