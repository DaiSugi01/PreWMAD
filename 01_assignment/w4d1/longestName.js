// write a function that returns the longest name {first and last} in the given array of objects

const LongestName = function(instructors) {
  // Put your solution here

  let currentName = "";
  let longestName = "";

  for (instructor of instructors) {
    currentName = `${instructor.first} ${instructor.last}`;
    
    if (currentName.length > longestName.length) {
      longestName = currentName;
    }
  }
  
  return longestName;
};


console.log(LongestName([
  {first: "Samuel", last: "Sanderson"},
  {first: "Jeremiah", last: "Web"},
  {first: "Ophilia", last: "Rich"},
  {first: "Donald", last: "kant"}
]));
console.log(LongestName([
  {first: "Matthew", last: "Ebert"},
  {first: "David", last: "John"},
  {first: "Domascus", last: "Anderson"}
]));