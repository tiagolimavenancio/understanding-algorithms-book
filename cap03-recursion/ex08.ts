function countUp(value: number, target: number): number {
  if (value === target) {
    return target;
  }

  return countUp(value + 1, target);
}

const value = 1;
const target = 10;
const result = countUp(value, target);
console.log({ result });
