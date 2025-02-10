// Simple Function

function SayHelloo() {
    console.log('Hello');
}

SayHelloo();

// Arrow Function

const SayHello = () => {
    console.log('Hello Lokesh');
}

SayHello();

const add = (a,b) => a + b; // Single Line Arrow Function
console.log(add(5,5));


// Hoisting

sayhey(); // Call Before Declaration

function sayhey () {
    console.log('Hey');
}