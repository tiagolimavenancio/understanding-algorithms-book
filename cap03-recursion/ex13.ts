function findLastGreaterThan(arr: number[], target: number): number | null {
  if (arr.length === 0) {
    return null;
  }

  const current = arr[0];
  const rest = arr.slice(1);
  const result = findLastGreaterThan(rest, target);

  if (result !== null) {
    return result;
  }

  if (current > target) {
    return current;
  }

  return null;
}

const numbers = [4, 9, 2, 7, 5];
const target = 6;
const result = findLastGreaterThan(numbers, target);
console.log({ result });
