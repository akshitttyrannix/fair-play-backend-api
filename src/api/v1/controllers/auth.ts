import { Request, Response } from "express";

export const signup = async (req: Request, res: Response) => {
  return res.status(201).json({
    status: 201,
    message: "User created successfully",
  });
};
export const signin = async (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "User logged in successfully",
  });
};
export const logout = async (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "User logged out successfully",
  });
};
