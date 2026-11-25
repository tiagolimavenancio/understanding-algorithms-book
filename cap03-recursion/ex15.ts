function sumEvenAndOdd(numbers: number[]): { even: number; odd: number } {
  if (numbers.length === 0) {
    return {
      even: 0,
      odd: 0,
    };
  }

  const current = numbers[0];
  const rest = numbers.slice(1);
  const result = sumEvenAndOdd(rest);

  if (current % 2 === 0) {
    result.even = result.even + current;
  } else {
    result.odd = result.odd + current;
  }

  return result;
}

const numbers = [1, 2, 3, 4];
const result = sumEvenAndOdd(numbers);
console.log({ result });
