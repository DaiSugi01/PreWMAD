// This is messy code.
// See the bonusChallenge2.js which is more cleaner than this.
const calculateChange = function(total, cash) {
  // Your code here

  let moneyTypes = {
    fiftyDollar: {
      amount: 5000,
      sum: 0
    },
    twentyDollar: {
      amount: 2000,
      sum: 0
    },
    tenDollar: {
      amount: 1000,
      sum: 0
    },
    twoDollar: {
      amount: 200,
      sum: 0
    },
    oneDollar: {
      amount: 100,
      sum: 0
    },
    quarter: {
      amount: 25,
      sum: 0
    },
    dime: {
      amount: 10,
      sum: 0
    },
    penny: {
      amount: 1,
      sum: 0
    }
  };

  let change = cash - total;

  // Calculate change
  for (let moneyType of Object.keys(moneyTypes)) {
    [resultSum, change] = [...calculate(change, moneyTypes[moneyType].amount)];
    moneyTypes[moneyType].sum += resultSum;
  };

  // create an array to print out result
  let result = {};
  for (let moneyType of Object.getOwnPropertyNames(moneyTypes)) {
    if (moneyTypes[moneyType].sum > 0) {
      result[moneyType] = moneyTypes[moneyType].sum;
    }
  };

  return result;
};

const calculate = (change, moneyAmount) => {
  // calculate how many money is needed.

  let sum = 0;

  while (true) {
    if (change - moneyAmount >= 0) {
      sum += 1;
      change -= moneyAmount;
    } else {
      break;
    }
  }

  return [sum, change];
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// ******Expected result******
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }