
const memory = new Map<number, number>();
export const hundredTimes = (param: number): number => {
  if (memory.has(param)) {
    console.log(`We have cache for param: ${param}`);

    return memory.get(param) as number;
  }

  console.log(`New calculation is on progress for param: ${param}`);

  let newValue = 0;
  // Brilliant saddleback search algo
  for (let e = 0; e < param; e++) {
    for (let i = 0; i < 100; i++) {
      newValue += 1;
    }
  }

  memory.set(param, newValue);
  return newValue;
};
