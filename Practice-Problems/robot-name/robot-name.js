// Write a program that manages robot factory settings.

/*
Problem:


*/

class Robot {
  constructor() {
    this.robotName = null;
  }

  static LETTERS_NUMBERS = {
    letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '1234567890',
  };

  static usedNames = [];

  static getRandomLetter() {
    let min = 0;
    let max = Robot.LETTERS_NUMBERS.letters.length;
    let randomIndex = Math.floor(Math.random() * (max - min));
    return Robot.LETTERS_NUMBERS.letters[randomIndex];
  }

  static getRandomNumber() {
    let min = 0;
    let max = Robot.LETTERS_NUMBERS.numbers.length;
    let randomIndex = Math.floor(Math.random() * (max - min));
    return Robot.LETTERS_NUMBERS.numbers[randomIndex];
  }

  name() {
    if (this.robotName) {
      return this.robotName;
    }
    let name = '';
    for (let index = 0; index < 2; index += 1) {
      name += Robot.getRandomLetter();
    }
    for (let index = 0; index < 3; index += 1) {
      name += Robot.getRandomNumber();
    }

    if (Robot.usedNames.indexOf(name) !== -1) {
      return this.name();
    } else {
      Robot.usedNames.push(name);
      this.robotName = name;
      return name;
    }
  }

  reset() {
    let index = Robot.usedNames.indexOf(this.robotName);
    Robot.usedNames.splice(index, 1);
    this.robotName = null;
  }
}

module.exports = Robot;
