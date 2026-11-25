function countOccurrences(text: string, target: string): number {
  if (text === "") {
    return 0;
  }

  const char = text[0];
  const rest = text.slice(1);

  if (char === target) {
    return 1 + countOccurrences(rest, target);
  }

  return 0 + countOccurrences(rest, target);
}

const word = "banana";
const target = "o";
const result = countOccurrences(word, target);
console.log({ result });
