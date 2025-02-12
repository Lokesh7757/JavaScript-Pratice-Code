// Arrays

const students = ['John', 'Jane', 'Jack', 'Jill'];

students[0] = "Lokesh"; // replace John with Lokesh

students.push("Sunny"); // add Sunny at the end of the array

students.pop(); // remove the last element from the array 

students.reverse(); // reverse the array


console.log(students.length);  // 4
console.log(students[0]); // John
console.log(students[students.length -1]); // Jill
console.log(students.indexOf("Jill")); // 3
console.log(students.pop()); // Jill
console.log(students); // [ 'Jill', 'Jack', 'Jane']

