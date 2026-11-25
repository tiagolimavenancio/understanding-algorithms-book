function quicksort(numbers: number[]): number[] {
  if (numbers.length <= 1) {
    return numbers;
  }

  const pivotIndex = Math.floor(numbers.length / 2);
  const pivot = numbers[pivotIndex];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    if (i === pivotIndex) continue;

    if (numbers[i] < pivot) {
      left.push(numbers[i]);
    } else {
      right.push(numbers[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
const result = quicksort(numbers);
console.log({ result });
