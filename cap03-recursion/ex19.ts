function partitionNumbers(numbers: number[]): {
  positive: number[];
  negative: number[];
  zero: number[];
} {
  if (numbers.length === 0) {
    return {
      positive: [],
      negative: [],
      zero: [],
    };
  }

  const current = numbers[0];
  const rest = numbers.slice(1);
  const result = partitionNumbers(rest);

  if (current > 0) {
    result.positive.push(current);
  }

  if (current < 0) {
    result.negative.push(current);
  }

  if (current === 0) {
    result.zero.push(current);
  }

  return result;
}

const numbers = [3, -2, 0, 7, -5, 0];
const result = partitionNumbers(numbers);
console.log({ result });
