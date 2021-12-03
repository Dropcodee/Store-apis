import { CustomError } from './CustomError';

export class NotAuthorizedError extends CustomError {
  statusCode = 403;
  constructor() {
    super('Not Authorized');

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  SerializeErrors() {
    return [{ message: 'Not Authorized to access this resource' }];
  }
}
