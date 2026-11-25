function sumArray(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }
  const current = arr[0];
  const rest = arr.slice(1);
  return current + sumArray(rest);
}

const numbers = [4, 7, 2, 9];
const result = sumArray(numbers);
console.log({ result });
