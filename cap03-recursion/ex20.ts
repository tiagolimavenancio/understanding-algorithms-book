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
  let result = partitionNumbers(rest);

  if (current > 0) {
    result = {
      ...result,
      positive: [...result.positive, current],
    };
  }

  if (current < 0) {
    result = {
      ...result,
      negative: [...result.negative, current],
    };
  }

  if (current === 0) {
    result = {
      ...result,
      zero: [...result.zero, current],
    };
  }

  return result;
}

const numbers = [3, -2, 0, 7, -5, 0];
const result = partitionNumbers(numbers);
console.log({ result });
