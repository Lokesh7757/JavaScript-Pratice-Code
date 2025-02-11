// map() built in function in JavaScript

const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log(squared);


// filter() built in function in JavaScript

const even = numbers.filter(num => num % 2 === 0);
console.log(even);

// reduce() built in function in JavaScript

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);



// Custome Higher Order Function -> function takes another function as an argument.

function higherOrderFunction(arr, operation) {
    return arr.map(operation);
}

const double = num => num * 2;
console.log(higherOrderFunction([1,2,3],double));