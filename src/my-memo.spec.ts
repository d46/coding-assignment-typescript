import { hundredTimes } from './my-memo';

describe('my-memo', () => {
  it('new response for 1', () => {
    expect(hundredTimes(1)).toStrictEqual(100);
  });

  it('cached response for 1', () => {
    expect(hundredTimes(1)).toStrictEqual(100);
  });

  it('new response for 2', () => {
    expect(hundredTimes(2)).toStrictEqual(200);
  });

  it('cached response for 2', () => {
    expect(hundredTimes(2)).toStrictEqual(200);
  });
});
