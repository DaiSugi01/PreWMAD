// write a function that returns the sum of all the numbers that are either 'even', or 'odd'

const conditionalAdding = function(values, condition) {
  // Your code here

  if (values.length === 0) {
    return "There is no value in the given array.";
  }

  let evenSum = 0;
  let oddSum = 0;

  for (let value of values) {
    value % 2 === 0 ? evenSum += value: oddSum += value;
  };

  if (condition === "even") {
    return evenSum;
  } else {
    return oddSum;
  };
};

console.log(conditionalAdding([1, 2, 3, 4, 5], "even"));
console.log(conditionalAdding([1, 2, 3, 4, 5], "odd"));
console.log(conditionalAdding([13, 88, 12, 44, 99], "even"));
console.log(conditionalAdding([], "odd"));