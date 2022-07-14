// // let boba = 5;
// // if (boba < 3) {
// //   console.log("!");
// // }

// // if (boba == 5) {
// //   console.log("@");
// // }

// // if (boba <= 5) {
// //   console.log("#");
// // }

// // let boba = 5;
// // if (boba < 3) {
// //   console.log("!");
// // } else if (boba == 5) {
// //   console.log("@");
// // } else if (boba <= 5) {
// //   console.log("#");
// // } else if (boba > 5) {
// //   console.log("%");
// // }

// let boba = 5;
// if (boba < 3) {
//   console.log("!");
// } else if (boba == 5) {
//   console.log("@");
// } else if (boba <= 5) {
//   console.log("#");
// } else if (boba > 5) {
//   console.log("%");
// } else {
//   console.log("^");
// }

// let count = 0;
// if (1 > -1) {
//   count += 5;
//   count *= 2;
// } else if ("a" == "A") {
//   count = count - 2;
//   count /= 4;
// }
// if ("apple" > "alien") {
//   count--;
//   count--;
//   count--;
// }

// console.log(count);

// if (true) {
//   console.log("trueblocks are executed");
// }

// if (false) {
//   console.log("false blocks are NOT executed");
// }
firstInput = process.argv[2];

// console.log("First input:", firstInput);
console.log("Your guess", firstInput);
let randNum1 = Math.random() * 100;
//let randNum = randDecimal * 10;
let randInt1 = Math.floor(randNum1);

let guess = process.argv[2];
//[0-1) * 5 -> [0 - 5)

console.log("Random number generated:", randInt1);

if (guess == randInt1) {
  console.log("YOU GUESSED RIGHT!!!");
} else if (guess < randInt1) {
  console.log("Your guess it TOO LOW");
} else {
  guess > randInt1;
  console.log("Your guess it TOO HIGH");
}
