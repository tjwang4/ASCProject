let randNum1 = Math.random() * 10;
let randNum2 = Math.random() * 10;
//let randNum = randDecimal * 10;
let randInt1 = Math.floor(randNum1);
let randInt2 = Math.floor(randNum2);

//[0-1) * 5 -> [0 - 5)

console.log("Random number #1:", randInt1);
console.log("Random number #2:", randInt2);
let sum = randInt1 + randInt2;
console.log("Sum:", sum);

let days = [
  "Friday",
  "Monday",
  "Today",
  "Yesterday",
  "Your Birthday",
  "Never",
  "Sundae",
];

//let randDays = days.random();

let reactions = ["Yay!", "Ahhhhh!!!", "Wu wi wa wa", "Guli Guli", "Ka chow"];

let randDays = Math.random() * days.length;
let randReactions = Math.random() * reactions.length;

let rantInt1 = Math.floor(randDays);
let rantInt2 = Math.floor(randReactions);

console.log("Your lucky day:", days[rantInt1]);
console.log(reactions[rantInt2]);

console.log["days"];
for (let i = 0; i < days.length; i++) {
  console.log(i, days[i]);
}
