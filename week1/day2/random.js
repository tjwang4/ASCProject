// // let randDecimal = Math.random();
// // let randNum = randDecimal * 5;
// // let randInt = Math.floor(randNum);

// // // [0-1) * 5 -> [0 - 5)

// // console.log("randDecimal:", randDecimal);
// // console.log("randNum:", randNum);
// // console.log("randInt:", randInt);

let pokeArray = ["bulbasaur", "charmander", "squirtle", "pikachi"];

let randDecimal = Math.random();
let randNum = randDecimal * pokeArray.length;
let randInt = Math.floor(randNum);

console.log(pokeArray[randInt]);
