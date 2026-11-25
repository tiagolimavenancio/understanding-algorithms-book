function findLowestCostNode(costs: Record<string, number>, processed: Set<string>): string | null {
  let lowerCost = Infinity;
  let lowerNode: string | null = null;

  for (const node in costs) {
    const cost = costs[node];

    if (!processed.has(node) && cost < lowerCost) {
      lowerCost = cost;
      lowerNode = node;
    }
  }

  return lowerNode;
}

function dijkstra(
  start: string,
  target: string,
  graph: Record<string, Record<string, number>>,
): { path: string[]; cost: number } | null {
  const costs: Record<string, number> = {};
  const previous = new Map<string, string>();
  const processed = new Set<string>();

  for (const node in graph) {
    costs[node] = Infinity;
  }

  if (!(start in graph) || !(target in graph)) {
    return null;
  }

  costs[start] = 0;

  let node = findLowestCostNode(costs, processed);

  while (node !== null) {
    const cost = costs[node];

    for (const neighbor in graph[node]) {
      const newCost = cost + graph[node][neighbor];

      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
        previous.set(neighbor, node);
      }
    }

    processed.add(node);
    node = findLowestCostNode(costs, processed);
  }

  if (costs[target] === Infinity) {
    return null;
  }

  const path: string[] = [];
  let current = target;

  while (current !== start) {
    path.push(current);
    current = previous.get(current)!;
  }

  path.push(start);
  path.reverse();

  return {
    path,
    cost: costs[target],
  };
}

const graph = {
  Tiago: { Alice: 3, Bob: 7 },
  Alice: { Daniel: 2 },
  Bob: { Daniel: 1 },
  Daniel: {},
  Carlos: {},
};

const result = dijkstra("Tiago", "Carlos", graph);
console.log(result);
