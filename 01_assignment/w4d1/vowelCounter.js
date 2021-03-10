// write a function that counts the number of vowels in a given string and returns that value

const vowelCounter = function(data) {
  // Put your solution here

  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  let sum = 0;
  for (str of data) {
    vowels.has(str) ? sum += 1: "";
  }

  return sum;
};

console.log(vowelCounter("orange"));
console.log(vowelCounter("Cornerstone"));
console.log(vowelCounter("aeiou"));