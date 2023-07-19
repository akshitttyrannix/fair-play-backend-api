export interface WithdrawDto {
  transactionId: string;
  amount: number;
  utr: string;
  type: string;
}

export interface DepositDto {
  transactionId: string;
  amount: number;
  utr: string;
  type: string;
}
