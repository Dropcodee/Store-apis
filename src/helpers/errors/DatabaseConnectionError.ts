import {CustomError} from './CustomError';

export class DatabaseConnectionError extends CustomError {
  reason = "Error connecting to database...❌🚫🚫";
  statusCode = 500;
  constructor() {
    super('Error connecting to database... ❌🚫🚫');
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  SerializeErrors() {
    return [{ message: this.reason }];
  }
}
