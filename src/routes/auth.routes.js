import { Router } from "express";
import authSchemas from "../schemas/auth.schemas.js";
import AuthValidations from "../middlewares/auth.validations.js";
import AuthControllers from "../controllers/auth.controllers.js";
import { validateSchemaBody } from "../middlewares/schema.validation.js";

const authValidations = new AuthValidations();
const authControllers = new AuthControllers();

const authRouter = Router();

authRouter.post(
  "/auth/sign-up",
  validateSchemaBody(authSchemas.schemaSignUp),
  authValidations.validateSignUp,
  authControllers.signUp
);
authRouter.post(
  "/auth/sign-in",
  validateSchemaBody(authSchemas.schemaSignIn),
  authValidations.validateSignIn,
  authControllers.signIn
);

export default authRouter;
