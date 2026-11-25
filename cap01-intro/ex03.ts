function findFirstGreaterOrEqual(numbers: number[], target: number): number | null {
  let start = 0;
  let end = numbers.length - 1;
  let result: number | null = null;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    const value = numbers[middle];

    if (value >= target) {
      result = value;
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return result;
}

const numbers = [2, 5, 8, 12, 16, 21, 25, 30, 35];

console.log(findFirstGreaterOrEqual(numbers, 20));
console.log(findFirstGreaterOrEqual(numbers, 25));
console.log(findFirstGreaterOrEqual(numbers, 26));
console.log(findFirstGreaterOrEqual(numbers, 40));
