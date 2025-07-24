const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.456789;
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));
// console.log(hundreds.toLocaleString('en-US'));


// ++++++++++++++++++++++++++ MATH OPERATIONS ++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.min(4, 5, 6, 7, 8));
console.log(Math.max(4, 5, 6, 7, 8));

console.log(Math.random()); // Generates a random number between 0 and 1
console.log(Math.random() * 10); // Generates a random number between 0 and 10
console.log(Math.floor(Math.random() * 10)); // Generates a random integer between 0 and 9
console.log(Math.floor(Math.random() * 10) + 1); // Generates a random integer between 1 and 10

const min = 10;
const max = 20;
const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min; // Generates a random integer between 10 and 20
console.log(randomInRange);