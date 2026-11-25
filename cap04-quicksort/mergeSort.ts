function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

function mergeSort(items: number[]): number[] {
  if (items.length <= 1) {
    return items;
  }

  const middle = Math.floor(items.length / 2);

  const left = items.slice(0, middle);
  const right = items.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

const numbers = [1, 4, 8, 2, 3, 7];
const result = mergeSort(numbers);
console.log({ result });
