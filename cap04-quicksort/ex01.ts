const numbers: number[] = [4, 2, 7, 1, 5];
const pivot: number = numbers[0];
const left: number[] = [];
const right: number[] = [];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < pivot) {
    left.push(numbers[i]);
  } else {
    right.push(numbers[i]);
  }
}

console.log("Left:", left);
console.log("Pivot:", pivot);
console.log("Right:", right);
