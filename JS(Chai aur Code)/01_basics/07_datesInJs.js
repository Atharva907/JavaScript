// Dates

let myDate = new Date();
// console.log(myDate); // Current date and time
// console.log(myDate.toString()); // String representation of the date
// console.log(myDate.toDateString()); // Date part only
// console.log(myDate.toLocaleString()); // Locale-specific string representation

// console.log(typeof myDate); // "object"

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimestamp =Date.now();
// // console.log(myTimestamp);
// // console.log(myCreatedDate.getTime()); 
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());