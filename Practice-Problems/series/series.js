// Write a program that will take a string of digits and return all the
// possible consecutive number series of a specified length in that string.

/*
Problem:

  Input:
    - A string of digits
    - A number representing consecutive digits

  Output:
    - An array of arrays of numbers of consecutive digits

  - If the number representing consecutive digits is larger than the length
    of the string of digits, throw an error.


Examples:

  String: "01234"
  Number: 3
  Output: [[0, 1, 2], [1, 2, 3], [2, 3, 4]]


Algorithm:

- Check if input number is greater than length of string
  - if yes, throw error
- Create empty array to return
- Determine how many times to iterate through string
  - (strings length - number)
- Iterate the correct number of times
  - for each iteration:
    - create a new array
    - push current index through index + number, into new array
    - push array into return array
- Return return array

*/

class Series {
  constructor(stringDigits) {
    this.digits = stringDigits;
  }

  slices(number) {
    if (number > this.digits.length) {
      throw new Error('number too large');
    }

    let returnArray = [];
    let iterations = this.digits.length - number;

    for (let index = 0; index <= iterations; index += 1) {
      let arr = [];

      for (let idx = index; idx < number + index; idx += 1) {
        arr.push(Number(this.digits[idx]));
      }

      returnArray.push(arr);
    }

    return returnArray;
  }
}

module.exports = Series;
