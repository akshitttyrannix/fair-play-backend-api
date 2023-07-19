import mongoose from "mongoose";
import { timeStampSchema } from "./base";

const bankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  holderName: {
    type: String,
    required: true,
    trim: true,
  },
  accountNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["savings", "current"],
    trim: true,
    lowercase: true,
    default: "savings",
  },
  ifsc: {
    type: String,
    required: true,
    trim: true,
    minLength: 11,
    maxLength: 11,
    uppercase: true,
  },
  currentBalance: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  },
  usedFor: {
    type: String,
    required: true,
    enum: ["deposit", "withdraw"],
  },
  ...timeStampSchema,
});

bankSchema.post("save", function (doc, next) {
  console.log(`bank with holder name "${this.holderName}" saved successfully`);
  next();
});

export const Bank = mongoose.model("Bank", bankSchema);
