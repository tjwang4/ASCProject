// let letters = ["A", "B", "C", "D", "E"];

// console.log(letters[1]);
// console.log(letters[3]);
// console.log(letters[5]);

// let days = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];

// console.log(days[0]);
// console.log(days[6]);
// console.log(days.length);
// console.log(days[days.length - 1]);

// let myArray = ["Do", "Re", "Mi", "Fa", "So"];

// console.log(myArray);

// myArray.length = 2;
// console.log(myArray);

// myArray.length = 0;
// console.log(myArray);

// let scores = [85, 93, 65, 65, 92, 81, 93];

// //for(int i=0; i < SVGAnimatedNumberList.kength; i++)
// //sum= sum + numbers[i];
// //calculate average value
// //double average = sum / numebrs.length;
// //FileSystem.out.printIn("Average value of the array elemnt")

const numbers = [20, 10, 5, 100, 200, 4000, 445667, 45];
const students = [
  {
    name: "Tony",
    from: "CA",
    age: 18,
  },
  {
    name: "Emily",
    age: 15,
  },
];
const copy = [...numbers];
const sorted = copy.sort((a, b) => b - a);
console.log("max:", sorted[0]);
// const max = Math.min(...numbers);
// console.log(max);
/*
let maxNum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maxNum) maxNum = numbers[i];
}

console.log("max:", maxNum);
*/
let num = 1;
while (num < 100) {
  num = num * 5;
}
console.log(num);
const doubleNumbers = numbers.map((num) => num * 2);
const less100 = numbers.filter((num) => num < 100);
console.log(less100);
