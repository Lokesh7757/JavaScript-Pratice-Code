// Filter() - Used to filter elements based on a condition,  Returns a new array with elements that satisfy the condition.

const people = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 15 }
];

const adults = people.filter(person => person.age >= 18);
console.log(adults);


// Map() - Used to transform each element in an array, Returns a new array with modified elements.

const numbers = [1, 2, 3, 4, 5];
const sqaurenumbers = numbers.map(num => num * num);

console.log(sqaurenumbers);


// reduce() - Used to accumulate values into a single output, Returns a single value after processing the entire array.

const cart = [
    { item: "Shoes", price: 2000 },
    { item: "Watch", price: 3000 },
    { item: "Bag", price: 1500 }
];

const totalPrice = cart.reduce((total, product) => total + product.price, 0)

console.log("Total Price", totalPrice);
