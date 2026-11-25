function findLastEven(arr: number[]): number | null {
  if (arr.length === 0) {
    return null;
  }

  const current = arr[0];
  const rest = arr.slice(1);
  const result = findLastEven(rest);

  if (result !== null) {
    return result;
  }

  if (current % 2 === 0) {
    return current;
  }

  return null;
}

const numbers = [2, 4, 7, 8, 5];
const result = findLastEven(numbers);
console.log({ result });
