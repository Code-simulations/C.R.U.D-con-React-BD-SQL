import { Router } from "express";
import { createTasks, deleteTasks, getAllTasks, getTaskById, updateTasks } from "../controllers/tasks.controller.js";
import { validatorJwt } from "../middlewares/validatorjwt.js";
const tasksRouter = Router();
tasksRouter.post("/tasks", validatorJwt, createTasks);
tasksRouter.get("/tasks", validatorJwt, getAllTasks);
tasksRouter.get("/tasks/:id", validatorJwt, getTaskById);
tasksRouter.put("/tasks/:id", validatorJwt, updateTasks);
tasksRouter.delete("/tasks/:id", validatorJwt, deleteTasks);

export default tasksRouter;
