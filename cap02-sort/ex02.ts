function findPair(numbers: number[], target: number): string {
  let result: number | null = null;

  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    result = target - current;

    for (let j = i + 1; j < numbers.length; j++) {
      const next = numbers[j];

      if (result === next) {
        return `${current} + ${next} = ${target}`;
      }
    }
  }

  return "No pair found";
}

const numbers = [4, 1, 7, 3, 9, 2];
const target = 10;
console.log(findPair(numbers, target));
