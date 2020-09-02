type Params = {
  firstParam?: string;
  secondParam?: string;
};

export default (arg?: Params): Params => {
  const defaultArg = { firstParam: 'defaultFirst', secondParam: 'defaultSecond' };
  if (!arg) {
    return defaultArg;
  }

  return {
    ...defaultArg,
    ...arg,
  };
};
