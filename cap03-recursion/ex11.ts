function findFirstEven(arr: number[]): number | null {
  if (arr.length === 0) {
    return null;
  }

  const current = arr[0];
  const rest = arr.slice(1);

  if (current % 2 === 0) {
    return current;
  }

  return findFirstEven(rest);
}

const numbers = [1, 2, 7, 8, 10];
const result = findFirstEven(numbers);
console.log({ result });
