// write a function that console logs each item of the array one line at a time. 
// if the item is a string, log to the console both the item, and the words 'this is a string'. 
// if it is a number, just log the number

let example = [1, 'dog', 3, 'eight', 5, 'car', 7, 8];

const logStringsAndNumbers = function (examples) {
  for (ele of examples) {
    if (typeof(ele) === "string") {
      console.log(`${ele} this is a string`);
    } else {
      console.log(ele);
    }
  }
};

logStringsAndNumbers(example);

/*
response should look like this
1
dog this is a string
3
eight this is a string
5
car this is a string
7
8
*/