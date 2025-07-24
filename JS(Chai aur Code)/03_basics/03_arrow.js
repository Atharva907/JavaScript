const user = {
    username: "Atharva",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} Welcome to website`); 
        // console.log(this);
        
    }
}

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this);



// function chai(){
//     let username = "Atharva";
//     console.log(this.username);
// }

// chai();



// const chai = function(){
//     let username = "Atharva";
//     console.log(this.username); 
// }

// chai();



const chai = () =>{
    let username = "Atharva";
    console.log(this); 
}

// chai();



// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username: "Atharva"});

console.log(addTwo(3, 4));


const myArray = [2, 5, 3, 7, 8]
myArray.forEach((item) => {
    console.log(item);
});