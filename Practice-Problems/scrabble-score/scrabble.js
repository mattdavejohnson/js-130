// Write a program that, given a word, computes the Scrabble score for
// that word.

/*
Problem:

  - Sum the values of all the letters used in each word.
  - Each letter has a value.
  - Empty word scores 0.
  - Whitespace is 0 value.
  - Scores are case-insensitive


*/

class Scrabble {
  constructor(word) {
    this.word = word;
  }

  static LETTER_VALUES = {
    1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
    2: ['d', 'g'],
    3: ['b', 'c', 'm', 'p'],
    4: ['f', 'h', 'v', 'w', 'y'],
    5: ['k'],
    8: ['j', 'x'],
    10: ['q', 'z'],
  };

  static score(word) {
    return new Scrabble(word).score();
  }

  score() {
    let returnScore = 0;

    if (this.word === null) {
      return returnScore;
    }

    let splitWord = this.word.toLowerCase().split('');
    let keys = Object.keys(Scrabble.LETTER_VALUES);

    splitWord.forEach((letter) => {
      keys.forEach((key) => {
        let index = Scrabble.LETTER_VALUES[key].indexOf(letter);

        if (index !== -1) {
          returnScore += Number(key);
        }
      });
    });

    return returnScore;
  }
}

module.exports = Scrabble;
