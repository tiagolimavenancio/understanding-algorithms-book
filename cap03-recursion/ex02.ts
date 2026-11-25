function reverse(text: string): string {
  if (text === "") {
    return "";
  }

  return reverse(text.slice(1)) + text[0];
}

const word = "hello";
const result = reverse(word);

console.log({ result });
