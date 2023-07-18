import { Request, Response } from "express";

export const notFound = (req: Request, res: Response) => {
  res.status(400).json({
    status: 400,
    message: "Route not found, please check your url",
  });
};
