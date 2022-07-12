let answer;
let num1 = "3";
let num2 = "5";

answer = num1 + num2;
console.log(num1, "+", num2, "=", answer);

let num3 = 10;
let num4 = 4;

answer = num3 % num4;
console.log(num3, "%", num4, "=", answer);

let sum = 0;
for (let i = 1; i < 11; i++) {
  sum = sum + i;
  console.log(i, sum);
}

console.log("total:", sum);

const original = "Tony";
let reverse = "";
for (let i = 0; i < original.length; i++) {
  reverse =
    reverse + original.substring(original.length - i - 1, original.length - i);
  console.log(i, reverse);
}
console.log("reverse result:", reverse);

const original2 = "Emily";
let reverse2 = "";
for (let i = original2.length - 1; i >= 0; i--) {
  reverse2 = reverse2 + original2.substring(i, i + 1);
  // console.log(i, reverse2);
}
// console.log("reverse result 2:", reverse2);

console.log(original2, original2.substring(1, 4));
