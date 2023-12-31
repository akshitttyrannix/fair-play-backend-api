import { ErrorRequestHandler } from "express";

export const errorHandlerMiddleware: ErrorRequestHandler = async (err, req, res, next) => {
  console.log(`Error: ${err.message}`);

  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({
    status: statusCode,
    name: err.name,
    message: err.message,
  });
};
