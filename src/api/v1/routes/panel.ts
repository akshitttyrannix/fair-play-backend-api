import Express from "express";
import { createPanel } from "../controllers/panel";

export const panelRouter = Express.Router();

panelRouter.post("/", createPanel);
