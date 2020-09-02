# TypeScript coding assignment

- Let me know if you have questions anytime.
- You can share your code in any format, like on typescript playground, github or just a text file.
- The deadline is one week from when you get this.
- Please let me know how long it has taken to get it done when you submit this. There is no time limit though.



## Class

Complete the following MyArray class in TypeScript that can handle string and number only to get the expected results.
You can actually refine the code in the expected results a bit for getting the most out of TypeScript.
Then you can get a bonus point :-)

### Barebone class definition

class MyArray {
  add(value) {
    this.collection.push(value)
  }

  remove(value) {
  }

  getValues() {
    return this.collection
  }
}

### Expected results

const stringAry = new MyArray()
stringAry.add('aaa')
stringAry.add('bbb')
stringAry.add('ccc')
stringAry.remove('bbb')
console.log(stringAry.getValues())
//=> [ 'aaa', 'ccc' ]

const numberAry = new MyArray()
numberAry.add(1)
numberAry.add(2)
numberAry.add(3)
numberAry.remove(2)
console.log(numberAry.getValues())
//=> [ 1, 3 ]

const booleanAry = new MyArray()
numberAry.add(true)
numberAry.add(false)
//=> You shouldn't be able to do these.



## Arrow function with default args

Create an arrow function that takes an object with default values.
Here're the interface and expected results.

interface Params {
  firstParam: string;
  secondParam: string;
}

console.log(myFunc())
//=> { firstParam: 'defaultFirst', secondParam: 'defaultSecond' }
// The default values are returned when args not given.

console.log(myFunc({ firstParam: 'first', secondParam: 'second' }))
//=> { firstParam: 'first', secondParam: 'second' }
// The given values are returned when args given.

console.log(myFunc({ firstParam: 'first' }))
//=> { firstParam: 'first', secondParam: 'defaultSecond' }

console.log(myFunc({ secondParam: 'second' }))
//=> { firstParam: 'defaultFirst', secondParam: 'second' }



## Error handling

You can throw an Error and catch it in the JavaScript/TypeScript world.
But the developers have to implement try ~ catch. There's no compiler error if not. So it's not type safe.
You might want to return undefined/false instead, that forces the developers to handle the return value.
But it's not certain that they mean an error all the time.
Also you can't handle multiple errors and error messages with them.
Can you propose implementation to solve the issue, a way to handle errors intead of using the ways above?
You can find a solution on the Internet or provide your own.



## Memoization

Complete the following fuction called `validator`, that takes an optional function argument.
It caches the response and return it when there's.

### Given interface and function definitions

interface CustomResponse {
  valid: boolean;
  error: string;
}

const errorResponse = (): CustomResponse => {
  return {
    valid: false,
    error: 'error occurred',
  }
}

// Complete this fuction to work described in the following expected results.
const validator = (
  validatorFn?: () => CustomResponse
): CustomResponse => {
}

### Expected results

console.log(validator(() => errorResponse()).valid)
//=> false

console.log(validator().error)
//=> 'error occurred'

