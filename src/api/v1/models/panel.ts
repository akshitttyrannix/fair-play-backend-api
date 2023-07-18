import mongoose from "mongoose";
import { timeStampSchema } from "./base";

const panelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minLength: 3,
  },
  availablePoints: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
  clientPoints: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
  ...timeStampSchema,
});

export const Panel = mongoose.model("Panel", panelSchema);
