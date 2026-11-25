const graph: Record<string, string[]> = {
  Tiago: ["Alice", "Bob"],
  Alice: ["Daniel"],
  Bob: ["Elisa"],
  Daniel: [],
  Elisa: [],
};

function breadthFirstSearch(start: string, target: string): string[] | null {
  const queue: string[] = [start];
  const visited: Set<string> = new Set();
  const previous = new Map<string, string>();

  visited.add(start);

  while (queue.length > 0) {
    const person = queue.shift()!;
    console.log(`Person: ${person}`);

    if (person === target) {
      const path: string[] = [];
      let current = target;

      while (current !== start) {
        path.push(current);
        current = previous.get(current)!;
      }

      path.push(start);
      path.reverse();
      console.log(`Path: ${path}`);

      return path;
    }

    const neighbors = graph[person] ?? [];
    console.log(`Neighbors: ${neighbors}`);

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
        previous.set(neighbor, person);
      }
    }

    console.log(`Queue: ${queue}`);
    console.log(`Visited: ${Array.from(visited)}`);
    console.log("---");
  }

  return null;
}

console.log("begin");
const result = breadthFirstSearch("Tiago", "Elisa");
console.log(`Result: ${result}`);
console.log("end");
