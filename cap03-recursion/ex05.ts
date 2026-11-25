function findMin(numbers: number[]): number {
  const current = numbers[0];

  if (numbers.length === 1) {
    return current;
  }

  const rest = numbers.slice(1);
  const minRest = findMin(rest);

  if (current < minRest) {
    return current;
  }

  return minRest;
}

const numbers = [1, 4, 8, 2, 10, 6, 15];
const result = findMin(numbers);
console.log({ result });
