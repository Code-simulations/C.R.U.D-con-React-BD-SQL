import { Router } from "express";
import { login, logout, register, session } from "../controllers/auth.controller.js";
import { validatorJwt } from "../middlewares/validatorjwt.js";
const authRouter = Router();
authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/session", validatorJwt, session);
authRouter.post("/logout", logout);
export default authRouter;
