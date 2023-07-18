export const timeStampSchema = {
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
};
