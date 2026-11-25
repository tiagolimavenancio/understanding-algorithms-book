function binarySearch(numbers: number[], target: number) {
  let start = 0;
  let end = numbers.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    const value = numbers[middle];

    if (value === target) {
      return middle;
    }

    if (value < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}

const numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17];

console.log(binarySearch(numbers, 13)); // 6
console.log(binarySearch(numbers, 4)); // -1
