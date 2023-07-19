import { Request, Response } from "express";
import { Transaction } from "../models/transaction";
import { DepositDto } from "../interfaces/dto/transaction";

export const createDeposit = async (request: Request, response: Response) => {
  const depositRequest: DepositDto = request.body;

  const transaction = await Transaction.create(depositRequest);

  return response.status(201).json({
    status: 201,
    message: "Deposit transaction created successfully",
    transaction,
  });
};
