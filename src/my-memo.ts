export class WrongResponseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'WrongResponseError';
  }
}

export class CustomWrongResponseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CustomWrongResponseError';
  }
}

interface CustomResponse {
  valid: boolean;
  error: Error;
}

export const errorResponse = (): CustomResponse => {
  return {
    valid: false,
    error: new WrongResponseError('error occured'),
  };
};

export const customErrorResponse = (): CustomResponse => {
  return {
    valid: false,
    error: new CustomWrongResponseError('error occured'),
  };
};

let cacheOnModule: CustomResponse;
export const validator = (validatorFn?: () => CustomResponse): CustomResponse => {
  if (!validatorFn) {
    return cacheOnModule;
  }

  cacheOnModule = validatorFn();
  return cacheOnModule;
};
