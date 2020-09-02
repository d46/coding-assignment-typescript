import myArrow from './my-arrow';

describe('my-arrow', () => {
  it('get default args', () => {
    const defaultArgs = myArrow();
    expect(defaultArgs).toStrictEqual({ firstParam: 'defaultFirst', secondParam: 'defaultSecond' });
  });

  it('override first and second param', () => {
    const defaultArgs = myArrow({ firstParam: 'first', secondParam: 'second' });
    expect(defaultArgs).toStrictEqual({ firstParam: 'first', secondParam: 'second' });
  });

  it('override first param', () => {
    const defaultArgs = myArrow({ firstParam: 'first' });
    expect(defaultArgs).toStrictEqual({ firstParam: 'first', secondParam: 'defaultSecond' });
  });

  it('override second param', () => {
    const defaultArgs = myArrow({ secondParam: 'second' });
    expect(defaultArgs).toStrictEqual({ firstParam: 'defaultFirst', secondParam: 'second' });
  });
});
