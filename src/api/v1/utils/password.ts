import bcrypt from "bcrypt";

export const verifyPassword = async (password: string, verifyPassword: string) => {
  return await bcrypt.compare(password, verifyPassword);
};

export const hashingPassword = async (password: string) => {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
};

export const isPasswordValid = (password: string) => {
  if (password.length < 6) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/[a-z]/.test(password)) return false;
  if (!/\d/.test(password)) return false;
  if (!/[\W_]/.test(password)) return false;

  return true;
};
