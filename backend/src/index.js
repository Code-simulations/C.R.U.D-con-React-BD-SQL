import express from "express";
import morgan from "morgan";
import cors from "cors";
import chalk from "chalk";
import cookie from "cookie-parser";
import connections from "./db/database.js";
import authRouter from "./routers/auth.routes.js";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(cookie());
app.use(authRouter);

app.listen(4000, () => {
  console.log(chalk.blue("----------------------------------------------------------------------------------------------------"));
  console.log();
  console.log(chalk.green("                                Server is running on port 4000"));
  console.log();
  console.log(chalk.blue("----------------------------------------------------------------------------------------------------"));
  connections();
});
