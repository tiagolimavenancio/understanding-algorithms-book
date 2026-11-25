function countOccurrences(numbers: number[]): Record<number, number> {
  if (numbers.length === 0) {
    return {};
  }

  const current = numbers[0];
  const rest = numbers.slice(1);
  const result = countOccurrences(rest);

  if (result[current] !== undefined) {
    result[current] = result[current] + 1;
  } else {
    result[current] = 1;
  }

  return result;
}

const numbers = [2, 3, 2, 5, 3, 2];
const result = countOccurrences(numbers);
console.log({ result });
