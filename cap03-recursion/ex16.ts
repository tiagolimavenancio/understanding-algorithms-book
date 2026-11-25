function summarize(numbers: number[]): {
  sum: number;
  count: number;
  max: number | null;
  min: number | null;
} {
  if (numbers.length === 0) {
    return {
      sum: 0,
      count: 0,
      max: null,
      min: null,
    };
  }

  const current = numbers[0];
  const rest = numbers.slice(1);
  const result = summarize(rest);

  result.sum = result.sum + current;
  result.count = result.count + 1;

  if (result.max === null || current > result.max) {
    result.max = current;
  }

  if (result.min === null || current < result.min) {
    result.min = current;
  }

  return result;
}

const numbers = [1, 2, 3, 4];
const result = summarize(numbers);
console.log({ result });
