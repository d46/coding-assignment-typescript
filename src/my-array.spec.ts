import MyArray from './my-array';

describe('my-array', () => {
  it('get empty items', () => {
    const myArray = new MyArray<number>();

    expect(myArray.getvalues()).toStrictEqual([]);
  });

  it('add item', () => {
    const myArray = new MyArray<string>();
    myArray.add('aab');
    expect(myArray.getvalues()).toStrictEqual(['aab']);
  });

  it('remove item', () => {
    const myArray = new MyArray<string>();
    myArray.add('aab');
    myArray.remove('aab');
    expect(myArray.getvalues()).toStrictEqual([]);
  });
});
