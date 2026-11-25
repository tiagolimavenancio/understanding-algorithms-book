function countEven(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }

  const current = arr[0];
  const rest = arr.slice(1);

  if (current % 2 === 0) {
    return 1 + countEven(rest);
  }

  return countEven(rest);
}

const numbers = [1, 2, 4, 7, 8, 9, 14, 16];
const result = countEven(numbers);
console.log({ result });
