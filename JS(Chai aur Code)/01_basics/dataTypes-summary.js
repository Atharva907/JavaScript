// # Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsidetemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

const bigNumber = 5277356234785635342768534756n
console.log(typeof bigNumber);


// Dynamically types language

// # Reference type (Non-primitive)
// Array, Objects, Funcions

const heros = ["shaktiman", "naagraj", "doga"];
let myObje = {
    name:"Atharva",
    age: 22, 
}
const myFunction = function(){
    console.log("Hello World");
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-primitive)
let myYouTubeName = "Atharva";
let anotherName = myYouTubeName;
anotherName = "Atharva Chavan";
console.log(myYouTubeName);
console.log(anotherName); 

let userOne = {
    email: "user@google.com",
    upiId: "user@upi"
}

let userTwo = userOne;

userTwo.email = "Atharva.chavan@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
