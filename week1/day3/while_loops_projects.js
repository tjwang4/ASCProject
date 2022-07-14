// // firstInput = process.argv[2];
// // let countdown = firstInput;
// // while (countdown > 0) {
// //   countdown--;
// //   console.log(countdown);
// // }

// // let c = 0;
// // while (c < 5) {
// //   console.log("Little Donald Drumpf");
// //   c += 2;
// // }

// // let a = 0;
// // let b = 5;
// // while (a < b) {
// //   console.log("Little Donald Drumpf");
// //   a++;
// //   b++;
// // }

// let a = 0;
// let b = 5;
// while (a < b) {
//   console.log("Little Donald Drumpf");
//   a += 2;
//   b += 1;
// }

let randNum1 = Math.random() * 10;
let randNum2 = Math.random() * 10;

let randInt1 = Math.floor(randNum1);
let randInt2 = Math.floor(randNum2);
let count = 1;
while (randInt1 != randInt2) {
  console.log(
    `Try #${count}`,
    "1st random number:",
    randInt1,
    "2nd random number:",
    randInt2
  );
  randNum1 = Math.random() * 10;
  randNum2 = Math.random() * 10;
  randInt1 = Math.floor(randNum1);
  randInt2 = Math.floor(randNum2);
  count = count + 1;
}
console.log(
  `Try #${count}`,
  "1st random number:",
  randInt1,
  "2nd random number:",
  randInt2
);

console.log(`Same random numbers "${randInt1}" on try #${count}!, End Loop`);
// console.log(`1243${"happy"}${5 + 5}
// sdfg
// adfgadf

// drdhdrd
// `);
