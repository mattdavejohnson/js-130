// Implement octal to decimal conversion. Given an octal input string, your
// program should produce a decimal output.

/*
Problem:

- Don't use any built-in or library methods to perform the conversions. You
  must implement the conversion yourself.
- Octal numbers use a base-8 system.
  - The rightmost digit gets multiplied by 8^0 = 1
  - The next digit gets multiplied by 8^1 = 8
  - The digit after that gets multiplied by 8^2 = 64
  - The digit after that gets multiplied by 8^3 = 512
  - ...
  - The n*th* digit gets multiplied by 8n-1.
  - All of these values are then summed.
- Valid octal numbers only include digits 0 - 7. No letters or 8 and 9.


Examples:

233 in base 8

2       3       3
2*8^2 + 3*8^1 + 3*8^0
2*64  + 3*8   + 3*1
128   + 24    + 3
155


Algorithm:

get decimal from octal:
- convert number to string and split into array and reverse
  - this places the power of 0 in the arrays 0 index, the power of 1 in the
    1 index, and so on
- iterate through each value in array
  - convert string into number
  - get 8^index and then multiply that by current number
  - replace the value in the array with the result
- once iteration is complete, add each number in the resulting array
- return the result


*/

class Octal {
  constructor(octalNum) {
    this.octalNum = octalNum;
  }

  toDecimal() {
    let splitOctal = this.octalNum.split('').reverse();

    if (!this.isValidOctal(splitOctal)) {
      return 0;
    }

    let mapped = splitOctal.map((strNum, index) => {
      let currentNum = Number(strNum);
      let currentPower = 8 ** index;
      return currentNum * currentPower;
    });

    return mapped.reduce((curr, prev) => {
      return curr + prev;
    }, 0);
  }

  isValidOctal(arr) {
    let validDigits = ['0', '1', '2', '3', '4', '5', '6', '7'];

    for (let index = 0; index < arr.length; index += 1) {
      if (validDigits.includes(arr[index])) {
        continue;
      } else {
        return false;
      }
    }

    return true;
  }
}

module.exports = Octal;
