let userGuess = process.argv[2];
let answer = 5;
let score = 0;

if (userGuess == answer) {
  console.log("Correct Guess!!");
  score += 5; // score = score + 5
} else if (userGuess < answer) {
  console.log("To low!!");
  score -= 1;
} else {
  console.log("To high!!");
  score -= 1;
}

console.log("Final score:", score);
