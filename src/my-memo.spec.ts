import { validator, errorResponse, customErrorResponse, CustomWrongResponseError } from './my-memo';

describe('my-memo', () => {
  it('validator with error response', () => {
    expect(validator(() => errorResponse()).valid).toStrictEqual(false);
  });

  it('cached custom error response', () => {
    // Cache CustomWrongResponseError
    validator(() => customErrorResponse());

    expect(validator().error).toBeInstanceOf(CustomWrongResponseError);
  });
});
