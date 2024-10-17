import { Router } from "express";
import validatorJWT from "../middlewares/validatorJWT.js";
import { register } from "../controllers/auth.controllers.js";
const authRouter = Router();

authRouter.post("/register", register);
authRouter.get("/login");
authRouter.post("/session", validatorJWT);
authRouter.post("/logout");
export default authRouter;
