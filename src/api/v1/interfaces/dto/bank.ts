export interface BankDto {
  name: string;
  holderName: string;
  accountNumber: string;
  type: string;
  ifsc: string;
  currentBalance: number;
  usedFor?: string;
}
