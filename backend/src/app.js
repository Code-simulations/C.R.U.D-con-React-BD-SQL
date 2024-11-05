import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookie from "cookie-parser";
import color from "chalk";
import authRouter from "./routers/auth.routes.js";
import tasksRouter from "./routers/tasks.routes.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(cookie());
app.use(express.json());
app.use(authRouter);
app.use(tasksRouter);

app.listen(4000, () => {
  console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
  console.log();
  console.log(color.green("                               server is running on http://localhost:4000"));
  console.log();
  console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
});
