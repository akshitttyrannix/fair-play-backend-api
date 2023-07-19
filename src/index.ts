import express, { Request, Response } from "express";
import dotenv from "dotenv";
require("express-async-errors");

import { connectDB } from "./api/v1/db/connect";
import { errorHandlerMiddleware } from "./api/v1/middlewares/errorHandler";
import { notFound } from "./api/v1/middlewares/notFound";

import { withdrawRouter } from "./api/v1/routes/withdraw";
import { bankRouter } from "./api/v1/routes/bank";
import { panelRouter } from "./api/v1/routes/panel";
import { authRouter } from "./api/v1/routes/auth";
import { verifyToken } from "./api/v1/utils/token";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_VERSION = "/api/v1";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// todo: add token verification middleware
app.use(`${API_VERSION}/withdraw`, withdrawRouter);
app.use(`${API_VERSION}/bank`, verifyToken, bankRouter);
app.use(`${API_VERSION}/panel`, panelRouter);
app.use(`${API_VERSION}/auth`, authRouter);

app.get(`${API_VERSION}`, (req: Request, res: Response) => {
  res.status(200).json({
    message: "Heyy Hi! Tyrannix is here!",
  });
});

app.use(errorHandlerMiddleware);
app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
