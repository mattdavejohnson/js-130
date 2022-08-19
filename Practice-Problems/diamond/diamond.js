/* eslint-disable max-lines-per-function */
/* eslint-disable id-length */
// Write a program that takes an input letter and outputs it in a diamond
// shape. The given letter should be the widest point.

/*
Problem:

  - Diamond starts and ends with 'A'
  - Every row (besides first and last) have exactly two identical letters
  - The diamond is horizontally and vertically symmetric
  - The diamond has a square shape (width equals height)
  - The letters form a diamond shape
  - Top half has letters in ascending order
  - Bottom half has letters in descending order


Examples:

A:

A

C:

  A
 B B
C   C
 B B
  A

E:

    A
   B B
  C   C
 D     D
E       E
 D     D
  C   C
   B B
    A


*/

class Diamond {
  static LETTER_TABLE = {
    letters: 'ABCDEFG',
    A: 1,
    B: 3,
    C: 5,
    D: 7,
    E: 9,
    F: 11,
    G: 13,
  };

  static makeDiamond(letter) {
    if (letter === 'A') {
      return 'A\n';
    }
    let first = Diamond.makeFirstAndLastRow(letter);
    let top = Diamond.makeTop(letter);
    let middle = Diamond.makeMiddle(letter);
    let bottom = Diamond.makeBottom(letter);
    let last = Diamond.makeFirstAndLastRow(letter);

    return first + top + middle + bottom + last;
  }

  static makeFirstAndLastRow(letter) {
    let width = Diamond.LETTER_TABLE[letter];
    let padding = ' '.repeat(Math.floor(width / 2));
    return padding + 'A' + padding + '\n';
  }

  static makeTop(letter) {
    let width = Diamond.LETTER_TABLE[letter];
    let iterations = Diamond.LETTER_TABLE.letters.indexOf(letter) - 1;
    let returnString = '';

    for (let index = 1; index <= iterations; index += 1) {
      let currentLetter = Diamond.LETTER_TABLE.letters[index];
      let innerPadding = ' '.repeat(Diamond.LETTER_TABLE[currentLetter] - 2);
      let outerPadding = ' '.repeat(
        (width - Diamond.LETTER_TABLE[currentLetter]) / 2
      );
      let currentRow =
        outerPadding +
        currentLetter +
        innerPadding +
        currentLetter +
        outerPadding +
        '\n';
      returnString += currentRow;
    }

    return returnString;
  }

  static makeMiddle(letter) {
    let width = Diamond.LETTER_TABLE[letter];

    return letter + ' '.repeat(width - 2) + letter + '\n';
  }

  static makeBottom(letter) {
    let width = Diamond.LETTER_TABLE[letter];
    let iterations = Diamond.LETTER_TABLE.letters.indexOf(letter) - 1;
    let returnString = '';

    for (let index = iterations; index >= 1; index -= 1) {
      let currentLetter = Diamond.LETTER_TABLE.letters[index];
      let innerPadding = ' '.repeat(Diamond.LETTER_TABLE[currentLetter] - 2);
      let outerPadding = ' '.repeat(
        (width - Diamond.LETTER_TABLE[currentLetter]) / 2
      );
      let currentRow =
        outerPadding +
        currentLetter +
        innerPadding +
        currentLetter +
        outerPadding +
        '\n';
      returnString += currentRow;
    }

    return returnString;
  }
}

module.exports = Diamond;
