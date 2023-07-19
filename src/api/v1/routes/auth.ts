import Express from "express";
import { registerUser, signin, signup } from "../controllers/auth";

export const authRouter = Express.Router();

authRouter.post("/signup", signup);
authRouter.post("/signin", signin);
authRouter.post("/register", registerUser);
