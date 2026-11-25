type Product = {
  id: number;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: 10, name: "Keyboard", price: 150 },
  { id: 25, name: "Mouse", price: 80 },
  { id: 31, name: "Monitor", price: 1200 },
  { id: 42, name: "Headset", price: 300 },
  { id: 57, name: "Webcam", price: 450 },
  { id: 68, name: "Microphone", price: 700 },
];

function findProduct(products: Product[], id: number): Product | null {
  let start = 0;
  let end = products.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    const product = products[middle];

    if (product.id === id) {
      return product;
    }

    if (product.id < id) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return null;
}

console.log(findProduct(products, 57));
console.log(findProduct(products, 25));
