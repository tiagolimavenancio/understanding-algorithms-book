function quicksort(numbers: number[]): number[] {
  if (numbers.length <= 1) {
    return numbers;
  }

  const pivot = numbers[0];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < pivot) {
      left.push(numbers[i]);
    } else {
      right.push(numbers[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}

const numbers = [4, 2, 7, 1, 5];
const result = quicksort(numbers);
console.log({ result });
