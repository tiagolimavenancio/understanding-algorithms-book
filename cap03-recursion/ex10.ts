function sumEven(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }

  const current = arr[0];
  const rest = arr.slice(1);

  if (current % 2 === 0) {
    return current + sumEven(rest);
  }

  return sumEven(rest);
}

const numbers = [1, 2, 4, 7, 8];
const result = sumEven(numbers);
console.log({ result });
