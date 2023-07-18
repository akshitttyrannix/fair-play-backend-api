import Express from "express";

export const authRouter = Express.Router();

authRouter.post("/signup");
authRouter.post("/signin");
authRouter.get("/logout");
