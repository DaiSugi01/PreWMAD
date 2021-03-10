// write a function that joins the array items together into one string, and log it to the console
let brokenSentence = ['I', 'am', 'a', 'broken', 'sentence'];



const joinSentence= function (brokenSentence) {
  let newSentence = brokenSentence.join(" ");
  console.log(newSentence);
};

joinSentence(brokenSentence);