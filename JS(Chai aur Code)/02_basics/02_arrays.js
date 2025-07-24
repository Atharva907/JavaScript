const marvelHeroes = ["thor", "Ironman", "spiderman"];
const dcHeroes = ["superman","batman", "flsh"];

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]); // Accessing "batman" from dcHeroes

// const allHeros = marvelHeroes.concat(dcHeroes); // Merging two arrays
// console.log(allHeros);

const all_new_heroes = [...marvelHeroes, ...dcHeroes]; // Using spread operator
console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity); // Flattening the array
console.log(real_another_array); 

console.log(Array.isArray("Atharva"));
console.log(Array.from("Atharva")); // Converts string to array
console.log(Array.from({name: "Atharva"}));         //intresting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Creates an array from the arguments