import MyArray from './my-array';

// yarn lint:tsc

const myArray = new MyArray<string>();
myArray.add('aab');
// Gets compile time error
myArray.add(2);
myArray.remove(2);
