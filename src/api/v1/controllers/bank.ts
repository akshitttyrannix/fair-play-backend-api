import { Request, Response } from "express";
import { BankDto } from "../interfaces/dto/bank";
import { Bank } from "../models/bank";

export const createBank = async (req: Request, res: Response) => {
  const bankRequest: BankDto = req.body;

  const bank = await Bank.create(bankRequest);

  return res.status(201).json({
    status: 201,
    message: "Bank created successfully",
    bank,
  });
};
