let sports = ["basketball", "football", "soccer", "softball", "curling"];

for (let i = 0; i < sports.length; i++) {
  console.log(i, sports[i]);

  if (sports[i] == "softball") {
    console.log("softball is fun!");
    break;
  }
}
