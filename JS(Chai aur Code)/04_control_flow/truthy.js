const userEmail = "Atharva.ai"

if (userEmail){
    console.log("Got user email");
} else {
    console.log("Dont have user email");
}
 
/*

falsy vlaues:

false
0
-0
Bigint 0n
""
null
undefined
NaN


truthy values:
true
1
"hello"
-1
"0"
"false"
" "
[]
{}
function(){}

*/

if (userEmail.length ===0){
    console.log("Array is empty");   
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// nullish coalescing operator
// null undefined


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;

// console.log(val1);


// Ternary operator

// condition ? expressionIfTrue : expressionIfFalse;

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");


