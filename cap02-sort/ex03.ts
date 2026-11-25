function findPair(numbers: number[], target: number): string {
  const numbersFound = new Set<number>();

  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    const result = target - current;

    if (numbersFound.has(result)) {
      return `${current} + ${result} = ${target}`;
    }

    numbersFound.add(current);
  }

  return "No pair found";
}

const numbers = [4, 1, 7, 3, 9, 2];
const target = 10;
console.log(findPair(numbers, target));
