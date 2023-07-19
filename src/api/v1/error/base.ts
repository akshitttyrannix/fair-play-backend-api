export class BaseError extends Error {
  name: string;
  statusCode: number;

  constructor(statusCode: number, name: string, description: string, isOperational?: boolean) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.statusCode = statusCode;
    Error.captureStackTrace(this);
  }
}
