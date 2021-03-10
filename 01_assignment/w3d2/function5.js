// write a function that takes every item in the array, and adds the word 'HOORAY' to the end of it

let food = ['apple', 'orange', 'cake', 'carrots', 'pasta', 'rice', 'eggs'];

const addHooray = function (arr) {
  for (i=0; i < arr.length; i++) {
    arr[i] += "HOORAY";
  }
  console.log(arr);
  // food.forEach(ele => {
  //   console.log(`${ele}HOORAY`);
  // });
};

addHooray(food);