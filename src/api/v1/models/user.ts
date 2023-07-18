import mongoose, { Schema } from "mongoose";
import { timeStampSchema } from "./base";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    minLength: 6,
    required: true,
  },
  password: {
    type: String,
    minLength: 6,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ["admin", "withdrawal", "depositor"],
    default: "user",
    required: true,
    trim: true,
  },
  status: {
    type: Boolean,
    default: false,
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  ...timeStampSchema,
});

export const User = mongoose.model("User", userSchema);
