function groupNumbers(numbers: number[]): { even: number[]; odd: number[] } {
  if (numbers.length === 0) {
    return {
      even: [],
      odd: [],
    };
  }

  const current = numbers[0];
  const rest = numbers.slice(1);
  const result = groupNumbers(rest);

  if (current % 2 === 0) {
    result.even.push(current);
  } else {
    result.odd.push(current);
  }

  return result;
}

const numbers = [1, 4, 7, 2, 9, 6];
const result = groupNumbers(numbers);
console.log({ result });
