import jwt, { JwtPayload } from "jsonwebtoken";
import { Types } from "mongoose";
import { NextFunction, Request, Response } from "express";
import { forbiddenError, unauthorizedError } from "../error/error";

export let tokenData: any;

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) throw unauthorizedError;

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
    if (err) throw forbiddenError;
    tokenData = decoded;
    next();
  });
};

export const createToken = (userId: Types.ObjectId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: "1h" });
};
