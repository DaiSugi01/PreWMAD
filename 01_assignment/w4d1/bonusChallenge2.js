const calculateChange = function(total, cash) {
  // Your code here

  const currencyTypes = {
    fiftyDollar: 5000,
    twentyDollar: 2000,
    tenDollar: 1000,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    penny: 1
  };

  let change = cash - total;
  let resultCounter = {};
  
  // calculate change
  for (let currencyType of Object.keys(currencyTypes)) {

    // set an amount of currency
    const currencyAmount = currencyTypes[currencyType];

    // calculate needed currency
    if (change - currencyAmount >= 0) {
      const neededMcurrency =  Math.floor(change / currencyAmount);
      change -= currencyAmount * neededMcurrency;

      // store the count to print out the result
      resultCounter[currencyType] = neededMcurrency;
    }
  }

  return resultCounter;
};


/* ******************** Test ******************** */

// the return should be: { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(1787, 2000));

// the return should be: { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(2623, 4000));

// the return should be: { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
console.log(calculateChange(501, 1000));