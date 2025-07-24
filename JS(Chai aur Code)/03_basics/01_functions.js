// console.log("A");
// console.log("T");
// console.log("H");
// console.log("A");
// console.log("R");
// console.log("V");
// console.log("A");

function sayMyName() {
  console.log("A");
  console.log("T");
  console.log("H");
  console.log("A");
  console.log("R");
  console.log("V");
  console.log("A");
}

// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;

    return number1 + number2;
}

const result = addTwoNumbers(3, 4);
// console.log(result);

function loginUserMessage(username = "Atharva") {
    if(username === undefined){
        "Please provide a username.";
        return;    
    }
    else {
        return `${username} just logged in!`;
    }
}

// console.log(loginUserMessage("Atharva"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Atharva",
    price: 199
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);

handleObject({
    username: "Sam",
    price: 99
})

const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue([200, 400, 100, 600]));
