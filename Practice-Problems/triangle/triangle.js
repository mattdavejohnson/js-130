/* eslint-disable max-lines-per-function */
// Write a program to determine whether a triangle is equilateral, isosceles,
// or scalene.

/*

  Equilateral: all three sides the same length
  Isosceles: exactly two sides of the same length
  Scalene: all sides of different lengths

  Valid Triangle:
    - all sides must be of length > 0
    - the sum of the lengths of any two sides must be greater than the length
      of the third size

*/

class Triangle {
  constructor(sideOne, sideTwo, sideThree) {
    if (!this.isValidTriangle(sideOne, sideTwo, sideThree)) {
      throw new Error('not valid triangle');
    }

    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
  }

  kind() {
    if (this.sideOne === this.sideTwo && this.sideTwo === this.sideThree) {
      return 'equilateral';
    } else if (
      this.sideOne === this.sideTwo &&
      this.sideTwo !== this.sideThree
    ) {
      return 'isosceles';
    } else if (
      this.sideTwo === this.sideThree &&
      this.sideThree !== this.sideOne
    ) {
      return 'isosceles';
    } else if (
      this.sideOne === this.sideThree &&
      this.sideOne !== this.sideTwo
    ) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }

  isValidTriangle(sideOne, sideTwo, sideThree) {
    if (sideOne <= 0 || sideTwo <= 0 || sideThree <= 0) {
      return false;
    } else if (
      sideOne + sideTwo <= sideThree ||
      sideOne + sideThree <= sideTwo ||
      sideTwo + sideThree <= sideOne
    ) {
      return false;
    }

    return true;
  }
}

module.exports = Triangle;
