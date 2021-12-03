import { CustomError } from './CustomError';

export class NotAuthenticatedError extends CustomError {
  statusCode = 401;
  constructor() {
    super('Not Authenticated');

    Object.setPrototypeOf(this, NotAuthenticatedError.prototype);
  }

  SerializeErrors() {
    return [{ message: 'Not Authenticated to access this resource' }];
  }
}
