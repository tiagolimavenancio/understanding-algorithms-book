type Point = {
  x: number;
  y: number;
};

type Fruit = Point & {
  classification: "Apple" | "Orange";
};

function validatePoint(point: Point): void {
  if (!Number.isFinite(point.x) || !Number.isFinite(point.y)) {
    throw new Error("Point coordinates must be finite numbers");
  }
}

function euclideanDistance(a: Point, b: Point): number {
  validatePoint(a);
  validatePoint(b);

  const differenceX = a.x - b.x;
  const differenceY = a.y - b.y;

  // const squaredX = Math.pow(differenceX, 2);
  // const squaredY = Math.pow(differenceY, 2);

  // const sumOfSquares = squaredX + squaredY;
  // const distance = Math.sqrt(sumOfSquares);

  const distance = Math.sqrt(differenceX ** 2 + differenceY ** 2);

  return distance;
}

const fruits: Fruit[] = [
  { x: 0.4, y: 0.33, classification: "Apple" },
  { x: 0.6, y: 0.5, classification: "Orange" },
];

const newFruit: Point = {
  x: 0.5,
  y: 0.38,
};

type DistanceResult = {
  distance: number;
  classification: Fruit["classification"];
};

function calculateDistances(fruits: Fruit[], newFruit: Point): DistanceResult[] {
  validatePoint(newFruit);

  if (!Array.isArray(fruits) || fruits.length === 0) {
    throw new Error("Fruit list must not be empty");
  }

  for (const fruit of fruits) {
    validatePoint(fruit);
  }

  const results: DistanceResult[] = [];

  for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];

    const distance = euclideanDistance(fruit, newFruit);

    results.push({ classification: fruit.classification, distance });
  }

  return results;
}

function classifyFruit(fruits: Fruit[], newFruit: Point, k: number): Fruit["classification"] {
  if (!Number.isInteger(k) || k <= 0 || k > fruits.length) {
    throw new Error("Invalid value for k");
  }

  const results = calculateDistances(fruits, newFruit);
  results.sort((a, b) => a.distance - b.distance);

  const nearestNeighbors = results.slice(0, k);
  const votes = new Map<Fruit["classification"], number>();

  for (const neighbor of nearestNeighbors) {
    const currentVotes = votes.get(neighbor.classification) ?? 0;
    votes.set(neighbor.classification, currentVotes + 1);
  }

  let bestClassification = "" as Fruit["classification"];
  let maxVotes = 0;

  for (const [classification, count] of votes.entries()) {
    if (count > maxVotes) {
      maxVotes = count;
      bestClassification = classification;
    }
  }

  const closestNeighbor = nearestNeighbors[0];

  for (const [classification, count] of votes.entries()) {
    if (count === maxVotes && classification !== bestClassification) {
      return closestNeighbor.classification;
    }
  }

  return bestClassification;
}

const mockFruits: Fruit[] = [
  { x: 0.4, y: 0.33, classification: "Apple" },
  { x: 0.6, y: 0.5, classification: "Orange" },
];

const mockNewFruit: Point = {
  x: 0.43,
  y: 0.36,
};

const k = 10;

const classification = classifyFruit(mockFruits, mockNewFruit, k);
console.log(`The new fruit is classified as: ${classification}`);
