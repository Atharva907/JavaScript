// var c = 300
let a = 300;

if(true) {
    let a = 10;
    const b = 20;
    // console.log(a); 
}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Atharva";

    function two() {
        const website = "youtube.com";
        // console.log(username);
    }
    // console.log(website);

    two();

}
one();

if(true){
    const username = "Atharva";
    if (username === "Atharva") {
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);


// +++++++++++++ intresting part +++++++++++++

console.log(addone(5));

function addone(num){
    return num + 1;
}

// console.log(addTwo(5));

const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(5));