// Write a program that can generate the lyrics of the 99 bottles of beer song.

/*
Problem:


*/

class BeerSong {
  static LYRIC_TABLE = {
    0:
      'No more bottles of beer on the wall, no more bottles of beer.\n' +
      'Go to the store and buy some more, 99 bottles of beer on the wall.\n',
    1:
      '1 bottle of beer on the wall, 1 bottle of beer.\n' +
      'Take it down and pass it around, no more bottles of beer on the wall.\n',
    2:
      '2 bottles of beer on the wall, 2 bottles of beer.\n' +
      'Take one down and pass it around, 1 bottle of beer on the wall.\n',
  };

  static verse(num) {
    if ([0, 1, 2].includes(num)) {
      let strNum = String(num);
      return BeerSong.LYRIC_TABLE[strNum];
    }

    return this.getGenericVerse(num);
  }

  static verses(start, end) {
    let returnString = '';

    for (let index = start; index >= end; index -= 1) {
      returnString += BeerSong.verse(index);
      if (index !== end) {
        returnString += '\n';
      }
    }

    return returnString;
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }

  static getGenericVerse(num) {
    return (
      String(num) +
      ' bottles of beer on the wall, ' +
      String(num) +
      ' bottles of beer.\n' +
      'Take one down and pass it around, ' +
      String(num - 1) +
      ' bottles of beer on the wall.\n'
    );
  }
}

module.exports = BeerSong;
