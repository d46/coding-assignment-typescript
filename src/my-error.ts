// First of all sorry i couldn't understand the questins clearly.
// But it sounds like you may want to control your application with ErrorStacks
// For the internet 'Exception Handling is a mechanism to handle runtime errors'
// As you mention we don't have compile time errors in javascript but in typescript we have
// So returning boolean values or something else will be a distressing way to understand
// the faults.
// If there is an error we should see it as an error not a console log.

class MyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MyError';
  }
}

const errorThrower = () => {
  throw new MyError('some error');
};

export const good = (): void => {
  try {
    errorThrower();
  } catch (e) {
    // We can also differentiate Custom Errors like this
    if (e instanceof MyError) {
      throw e;
    }
  }
};

export const bad = (): void => {
  try {
    errorThrower();
  } catch (e) {
    return console.log(e);
  }
};
