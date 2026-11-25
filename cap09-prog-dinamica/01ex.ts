type Item = {
  weight: number;
  value: number;
};

const items: Item[] = [
  { weight: 3, value: 2000 }, // Notebook
  { weight: 1, value: 1500 }, // Violão
  { weight: 2, value: 2500 }, // Tablet
];

const maxCapacity = 5;

const matrix: number[][] = Array.from({ length: items.length + 1 }, () =>
  Array.from({ length: maxCapacity + 1 }, () => 0),
);

for (let i = 0; i < items.length; i++) {
  const item = items[i];

  for (let currentCapacity = 1; currentCapacity <= maxCapacity; currentCapacity++) {
    if (item.weight <= currentCapacity) {
      const remainingCapacity = currentCapacity - item.weight; // capacidade restante após incluir o item atual.
      const valueWithItem = item.value + matrix[i][remainingCapacity]; // calcular o valor incluindo o produto atual com o melhor valor encontrado da linha anterior.
      const valueWithoutItem = matrix[i][currentCapacity]; // valor sem incluir o item atual.
      matrix[i + 1][currentCapacity] = Math.max(valueWithItem, valueWithoutItem); // armazenar o melhor valor possível para a capacidade atual.
    } else {
      matrix[i + 1][currentCapacity] = matrix[i][currentCapacity]; // copiamos o melhor resultado da linha anterior.
    }
  }
}

console.log(matrix);

function recoverSelectedItems(items: Item[], matrix: number[][], maxCapacity: number): Item[] {
  const selectedItems: Item[] = [];
  let currentCapacity = maxCapacity;

  for (let i = items.length; i > 0; i--) {
    if (matrix[i][currentCapacity] !== matrix[i - 1][currentCapacity]) {
      const item = items[i - 1];
      selectedItems.push(item);
      currentCapacity -= item.weight;
    }
  }

  return selectedItems.reverse();
}

const selectedItems = recoverSelectedItems(items, matrix, maxCapacity);

console.log(selectedItems);
