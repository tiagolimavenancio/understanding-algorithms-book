type User = {
  id: number;
  name: string;
};

const users: User[] = [
  { id: 1, name: "Ana" },
  { id: 3, name: "Carlos" },
  { id: 5, name: "Maria" },
  { id: 7, name: "João" },
  { id: 9, name: "Pedro" },
  { id: 11, name: "Lucas" },
];

function findUser(users: User[], id: number): User | null {
  let start = 0;
  let end = users.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    const user = users[middle];

    if (user.id === id) {
      return user;
    }

    if (user.id < id) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return null;
}

console.log(findUser(users, 7));
console.log(findUser(users, 4));
