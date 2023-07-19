import { Request, Response } from "express";

import { SigninDto, SignupDto, UserDto } from "../interfaces/dto/auth";
import { User } from "../models/user";
import { credentialsError, dataInvalidError, passwordError, userAlreadyExistsError } from "../error/error";
import { createToken } from "../utils/token";
import { isPasswordValid, verifyPassword } from "../utils/password";

export const signup = async (req: Request, res: Response) => {
  const request: SignupDto = req.body;
  if (!request.username || !request.password) throw dataInvalidError;

  const existUser = await User.findOne({ username: request.username });
  if (existUser) throw userAlreadyExistsError;

  if (!isPasswordValid(request.password)) throw passwordError;

  const user = await User.create(request);

  return res.status(201).json({
    status: 201,
    message: "User created successfully",
    user,
  });
};

export const registerUser = async (req: Request, res: Response) => {
  const request: UserDto = req.body;
  console.log(request);
};

export const signin = async (req: Request, res: Response) => {
  const { username, password }: SigninDto = req.body;
  if (!username || !password) throw dataInvalidError;

  const user = await User.findOne({ username });
  if (!user) throw credentialsError;

  const isValid = await verifyPassword(password, user.password);
  if (!isValid) throw credentialsError;

  const token = createToken(user._id);

  return res.status(200).json({
    status: 200,
    message: "User logged in successfully",
    token,
  });
};
