function countCharacters(text: string): number {
  if (text === "") {
    return 0;
  }

  return 1 + countCharacters(text.slice(1));
}

const word = "hello";
const result = countCharacters(word);
console.log({ result });
