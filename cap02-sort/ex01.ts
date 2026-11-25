function findPair(numbers: number[], target: number): string {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const current = numbers[i];
      const next = numbers[j];

      if (current + next === target) {
        return `${current} + ${next} = ${target}`;
      }
    }
  }
  return "No pair found";
}

const numbers = [4, 1, 7, 3, 9, 2];
const target = 10;

console.log(findPair(numbers, target));
