function findMax(numbers: number[]): number {
  const current = numbers[0];

  if (numbers.length === 1) {
    return current;
  }

  const rest = numbers.slice(1);
  const maxRest = findMax(rest);

  if (current > maxRest) {
    return current;
  }

  return maxRest;
}

const numbers = [4, 8, 2, 10, 6, 1];
const result = findMax(numbers);
console.log({ result });
