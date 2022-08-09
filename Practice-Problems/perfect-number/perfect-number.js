// Write a program that can tell whether a number is perfect, abundant, or
// deficient.

/*
Problem:

  Aliquot sum: The positive divisors of a number added together.
  Perfect: Numbers that have an Aliquot sum that is equal to the original num.
  Abundant: Numbers that have Aliquot sum that is greater than original num.
  Deficient: Numbers that have Aliquot sum that is less than original num.


Examples:

- 6 is a perfect number since its divisors are 1, 2, and 3, and 1 + 2 + 3 = 6.

- 28 is a perfect number since its divisors are 1, 2, 4, 7, and 14 and
1 + 2 + 4 + 7 + 14 = 28.

- 15 is a deficient number since its divisors are 1, 3, and 5 and
1 + 3 + 5 = 9 which is less than 15.

- 24 is an abundant number since its divisors are 1, 2, 3, 4, 6, 8, and 12
and 1 + 2 + 3 + 4 + 6 + 8 + 12 = 36 which is greater than 24.

- Prime numbers 7, 13, etc. are always deficient since their only divisor is 1.


Algorithm:

- get all divisors of input number
- add all divisors together
- determine if added divisors are greater than, less than, or equal to input
- return correct string for number type

*/

class PerfectNumber {
  static classify(number) {
    if (number < 1) {
      throw new Error('not a valid number');
    }

    let aliquot = PerfectNumber.getAliquot(number);
    if (number === aliquot) {
      return 'perfect';
    } else if (number > aliquot) {
      return 'deficient';
    } else {
      return 'abundant';
    }
  }

  static getAliquot(number) {
    let divisors = [];

    for (let index = 1; index <= Math.floor(number / 2); index += 1) {
      if (number % index === 0) {
        divisors.push(index);
      }
    }

    return divisors.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
  }
}

module.exports = PerfectNumber;
