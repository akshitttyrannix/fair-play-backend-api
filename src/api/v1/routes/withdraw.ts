import Express from "express";
import { createWithdraw } from "../controllers/withdraw";

export const withdrawRouter = Express.Router();

withdrawRouter.post("/", createWithdraw);
