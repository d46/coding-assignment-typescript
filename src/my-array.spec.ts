import MyArray from './my-array';

describe('my-array', () => {
  it('get empty items', () => {
    const myArray = new MyArray();

    expect(myArray.getvalues()).toStrictEqual([]);
  });

  it('add item', () => {
    const myArray = new MyArray();
    myArray.add('aab');
    expect(myArray.getvalues()).toStrictEqual(['aab']);
  });

  it('remove item', () => {
    const myArray = new MyArray();
    myArray.add('aab');
    myArray.remove('aab');
    expect(myArray.getvalues()).toStrictEqual([]);
  });
});
