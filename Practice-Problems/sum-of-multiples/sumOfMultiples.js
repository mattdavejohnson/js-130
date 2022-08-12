// Write a program that, given a natural number and a set of one or more
// other numbers, can find the sum of all the multiples of the numbers in the
// set that are less than the first number. If set is not given, use a default
// set of 3 and 5.

/*
Problem:


Examples:

- List all natural numbers up to, but not including 20 that are multiples of
  either 3 or 5:

  3, 5, 6, 9, 10, 12, 15, 18

  the sum of these is 78


*/

class SumOfMultiples {
  constructor(...nums) {
    this.multiples = nums;
  }

  static to(number) {
    let multOfThree = SumOfMultiples.prototype.getMultiples(3, number);
    let multOfFive = SumOfMultiples.prototype.getMultiples(5, number);

    let combined = SumOfMultiples.prototype.removeDuplicates([
      ...multOfThree,
      ...multOfFive,
    ]);

    return combined.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
  }

  to(number) {
    if (this.multiples.length === 0) {
      return SumOfMultiples.to(number);
    }

    let allMult = [];

    this.multiples.forEach((num) => {
      let multiples = this.getMultiples(num, number);
      allMult.push(...multiples);
    });

    let combined = this.removeDuplicates(allMult);

    return combined.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
  }

  getMultiples(multiple, numUpTo) {
    let multiples = [];

    for (let index = 1; index < numUpTo; index += 1) {
      if (index % multiple === 0) {
        multiples.push(index);
      }
    }

    return multiples;
  }

  removeDuplicates(arr) {
    let noDuplicates = [];

    for (let index = 0; index < arr.length; index += 1) {
      if (noDuplicates.includes(arr[index])) {
        continue;
      }

      noDuplicates.push(arr[index]);
    }

    return noDuplicates;
  }
}

module.exports = SumOfMultiples;
