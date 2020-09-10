import { numberOrError, CustomError } from './my-error';

describe('my-error', () => {
  it('get number from func', () => {
    expect(numberOrError(2)).toStrictEqual(2);
  });

  it('get error from func', () => {
    expect(numberOrError(1)).toBeInstanceOf(CustomError);
  });
});

