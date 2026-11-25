function countOccurrences(words: string[]): Record<string, number> {
  if (words.length === 0) {
    return {};
  }
  const current = words[0];
  const rest = words.slice(1);
  const result = countOccurrences(rest);
  if (result[current] !== undefined) {
    result[current] = result[current] + 1;
  } else {
    result[current] = 1;
  }
  return result;
}

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const result = countOccurrences(words);
console.log({ result });
