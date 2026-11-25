function findLastLongWord(words: string[]): string | null {
  if (words.length === 0) {
    return null;
  }

  const current = words[0];
  const rest = words.slice(1);
  const result = findLastLongWord(rest);

  if (result !== null) {
    return result;
  }

  if (current.length >= 5) {
    return current;
  }

  return null;
}

const words = ["sol", "casa", "computador", "lua", "banana"];
const result = findLastLongWord(words);
console.log({ result });
