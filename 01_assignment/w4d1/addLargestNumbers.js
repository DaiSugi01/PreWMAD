const addLargestNumbers = function(data) {
  // Put your solution here

  if (data.length < 2) {
    return "You need at least two numbers";
  }

  let largestNum = -Infinity;
  let secondLargestNum = -Infinity;

  for (let i = 0; i < data.length; i++) {
    if (data[i] > largestNum) {
      secondLargestNum = largestNum;
      largestNum = data[i];
    } else if (data[i] > secondLargestNum) {
      secondLargestNum = data[i];
    }
  }

  return largestNum + secondLargestNum;
};

console.log(addLargestNumbers([1, 10]));
console.log(addLargestNumbers([1, 2, 3]));
console.log(addLargestNumbers([10, 4, 34, 6, 92, 2]));