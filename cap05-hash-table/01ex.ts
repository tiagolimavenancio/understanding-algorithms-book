type Entry = {
  key: number;
  value: string;
};

const table: Entry[][] = [[], [], [], [], []];

function hash(key: number): number {
  return key % table.length;
}

function set(key: number, value: string): void {
  const index = hash(key);
  const bucket = table[index];
  const entry = bucket.find((e) => e.key === key);

  if (entry) {
    entry.value = value;
  } else {
    bucket.push({ key, value });
  }
}

function get(key: number): string | undefined {
  const index = hash(key);
  const bucket = table[index];
  const entry = bucket.find((e) => e.key === key);
  return entry?.value;
}

function has(key: number): boolean {
  const index = hash(key);
  const bucket = table[index];
  const entry = bucket.find((e) => e.key === key);
  return entry !== undefined;
}
