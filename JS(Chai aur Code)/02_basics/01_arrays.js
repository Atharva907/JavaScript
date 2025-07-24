// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["Batman", "Superman", "Wonder"];

// console.log(myArr[0]); 
// console.log(myHeroes[1]);

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2[1]);

// myArr.push(6);             // add to the end
// myArr.push(7);             // add another element
// myArr.pop();               // remove from the end

// myArr.unshift(9);          // add to the beginning
// myArr.shift();             // remove from the beginning

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);
// console.log(newArr);

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);