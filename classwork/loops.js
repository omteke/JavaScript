for (let i = 0; i < 5; i++) {
  // code to be executed
}

let i = 0;
while (i < 5) {
  // code to be executed
  i++;
}

let j = 0;
do {
  // code to be executed
  j++;
} while (j < 5);

const shoppingCart = { banana: 2, apple: 5 };
for (const fruit in shoppingCart) {
  console.log(fruit); // Output: banana, apple
}

const items = ['apple', 'banana', 'cherry'];
for (const item of items) {
  console.log(item); // Output: apple, banana, cherry
}

const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => {
  console.log(fruit);
});
