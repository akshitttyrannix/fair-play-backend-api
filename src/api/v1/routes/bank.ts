import Express from "express";
import { createBank } from "../controllers/bank";

export const bankRouter = Express.Router();

bankRouter.post("/", createBank);
