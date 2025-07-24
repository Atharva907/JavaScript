// singleton
// Object.create() method

// object literal

const mySym = Symbol("key1");

const JsUser = {
    name: "Atharva",
    "full name": "Atharva Chavan",
    [mySym]: "myKey1",
    age: 18,
    location: "India",
    email: "athava.chavan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "ayush.chavan@gmail.com";
// Object.freeze(JsUser); // Prevents any changes to the object
JsUser.email = "ganesh.chavan@gmail.com"; // This will not change the email

// console.log(JsUser);

JsUser.greetings = function() {
    console.log("Hello Js User");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingTwo());