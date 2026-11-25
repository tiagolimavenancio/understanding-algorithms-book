function containsNumber(arr: number[], target: number): boolean {
  if (arr.length === 0) {
    return false;
  }

  const current = arr[0];
  const rest = arr.slice(1);

  if (current === target) {
    return true;
  }

  return containsNumber(rest, target);
}

const numbers = [4, 8, 2, 10, 6];
const target = 10;
const result = containsNumber(numbers, target);
console.log({ result });
