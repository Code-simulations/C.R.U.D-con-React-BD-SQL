import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookie from "cookie-parser";
import color from "chalk";
import authRouter from "./routers/auth.routes.js";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(cookie());
app.use(express.json());
app.use(authRouter);

app.listen(4000, () => {
  console.log(color.blue("------------------------------------------------------------------------------------------------------"));
  console.log();
  console.log(color.green("                               server is running on http://localhost:4000"));
  console.log();
  console.log(color.blue("------------------------------------------------------------------------------------------------------"));
});
