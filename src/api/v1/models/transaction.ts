import mongoose, { Schema } from "mongoose";
import { timeStampSchema } from "./base";

// todo: add a unique constraint on transactionId and utr

const transactionSchema = new mongoose.Schema({
  transactionId: {
    type: String,
    required: true,
    // unique: true,
    trim: true,
  },
  amount: {
    type: Number,
    required: true,
    trim: true,
    min: 0,
  },
  type: {
    type: String,
    enum: ["deposit", "withdraw", "transfer", "loan", "expense"],
    required: true,
    trim: true,
    immutable: true,
  },
  loan: {
    type: String,
    enum: ["credit", "debit"],
    required: false,
    trim: true,
    immutable: true,
  },
  status: {
    type: String,
    required: true,
    trim: true,
    default: "pending",
  },
  utr: {
    type: String,
    required: true,
    // unique: true,
    trim: true,
    immutable: true,
  },
  bank: {
    type: Schema.Types.ObjectId,
    ref: "Bank",
    required: true,
    immutable: true,
  },
  panel: {
    type: Schema.Types.ObjectId,
    ref: "Panel",
    immutable: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    immutable: true,
  },
  ...timeStampSchema,
});

transactionSchema.post("save", function (doc, next) {
  console.log(`transaction with ID "${this.transactionId}" saved successfully`);
  next();
});

export const Transaction = mongoose.model("Transaction", transactionSchema);
