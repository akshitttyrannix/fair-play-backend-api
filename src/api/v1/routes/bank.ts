import Express from "express";
import { createBank, getBanks } from "../controllers/bank";

export const bankRouter = Express.Router();

bankRouter.post("/", createBank);
bankRouter.get("/", getBanks);
