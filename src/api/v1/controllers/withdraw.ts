import { Request, Response } from "express";
import { Transaction } from "../models/transaction";
import { WithdrawDto } from "../interfaces/dto/transaction";

export const createWithdraw = async (request: Request, response: Response) => {
  const withdrawRequest: WithdrawDto = request.body;

  const transaction = await Transaction.create(withdrawRequest);

  return response.status(201).json({
    status: 201,
    message: "Withdraw transaction created successfully",
    transaction,
  });
};
