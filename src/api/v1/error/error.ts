import { BaseError } from "./base";

export const credentialsError = new BaseError(401, "Credentials Error", "Invalid username or password, please check credentials");

export const unauthorizedError = new BaseError(401, "Unauthorized Error", "Unauthorized user");

export const forbiddenError = new BaseError(403, "Forbidden Error", "Forbidden user");

export const dataInvalidError = new BaseError(400, "Data Invalid Error", "Data is invalid, please check data and try again");

export const userAlreadyExistsError = new BaseError(400, "User Already Exists Error", "User already exists, please try another username");

export const passwordError = new BaseError(400, "Password Error", "Password must contain at least 6 characters, one uppercase letter, one lowercase letter, one digit and one special character");
