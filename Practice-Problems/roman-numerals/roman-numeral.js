// Write code that converts modern decimal numbers into their Roman number
// equivalents.

/*
Problem:

  - Romans wrote numbers using letters - I, V, X, L, C, D, M
  - Do not need to be able to convert numbers larger than 3000
  - Modern Roman numerals are written by expressing each digit separately
    starting with the left most digit and skipping any digit with a value
    of zero
  - Placing any smaller number in front of any larger number indicates
    subtraction
  - We need to accept a number in our constructor and convert that number
    to Roman numerals with the toRoman method

Examples/Test Cases

  1990 === MCMXC
    1000 === M
    900 === CM
    90 === XC

  2008 === MMVIII
    2000 === MM
    8 = VIII

  I === 1
    II, III, IV === 2, 3, 4
  V === 5
    VI, VII, VIII, IX === 6, 7, 8, 9
  X === 10
    XI, XII, XIII, XIV, XV, XVI, XVII, XVIII, XIX, XX === 11 - 20
    XL === 40
    XLI === 41
  L === 50
    LX, LXX, LXXX, XC === 60, 70, 80, 90
  C === 100
    CC, CCC, CD === 200, 300, 400
  D === 500
    DC, DCC, DCCC, CM === 600, 700, 800, 900
  M === 1000
    MC, MCC, MCCC, MCD, MD === 1100, 1200, 1300, 1400, 1500
*/

class RomanNumeral {
  constructor(number) {
    this.number = number;
  }

  static CONVERSION_TABLE = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M',
    2000: 'MM',
    3000: 'MMM',
  };

  toRoman() {
    let arr = this.getPlaces();
    let numConvertedToRoman = '';

    arr.forEach((num) => {
      if (num !== 0) {
        numConvertedToRoman += this.convertNumber(num);
      }
    });

    return numConvertedToRoman;
  }

  getPlaces() {
    let numberLength = String(this.number).length;
    let number = this.number;
    let currentMod = 10;
    let places = [];

    for (let index = 0; index < numberLength; index += 1) {
      let currentNum = number % currentMod;
      places.unshift(currentNum);
      number -= currentNum;
      currentMod *= 10;
    }

    return places;
  }

  convertNumber(number) {
    let converted = RomanNumeral.CONVERSION_TABLE[number];
    return converted;
  }
}

module.exports = RomanNumeral;
