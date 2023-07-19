import mongoose, { Schema } from "mongoose";
import { timeStampSchema } from "./base";
import { hashingPassword } from "../utils/password";

// todo: add error message for validations

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    minLength: 6,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    minLength: 6,
    required: true,
    trim: true,
    hide: true,
  },
  role: {
    type: String,
    enum: ["admin", "withdrawal", "depositor"],
    default: "depositor",
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
  },
  ...timeStampSchema,
});

userSchema.pre("save", async function (next) {
  console.log(`Hashing password for user "${this.username}"`);
  this.password = await hashingPassword(this.password);
  next();
});

userSchema.post("save", async function (doc, next) {
  console.log(`User "${this.username}" saved successfully`);
  next();
});

export const User = mongoose.model("User", userSchema);
