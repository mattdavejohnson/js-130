/* eslint-disable max-lines-per-function */
// Write a program that takes a word and a list of possible anagrams and
// selects the correct sublist that contains the anagrams of the word.

/*
Problem:

  Anagram: A word or phrase formed by rearranging the letters of a different
  word or phrase, typically using all the original letters exactly once.

  Rules:
    - Identical words not an anagram
    - Must use each letter exactly once
    - Case-insensitive

*/

class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(arr) {
    let anagramArray = [];

    arr.forEach((word) => {
      if (this.isAnagram(word)) {
        anagramArray.push(word);
      }
    });

    return anagramArray;
  }

  isAnagram(word1) {
    if (word1.toLowerCase() === this.word.toLowerCase()) {
      return false;
    }

    if (word1.length !== this.word.length) {
      return false;
    }

    let wordOne = word1.toLowerCase().split('');
    let wordTwo = this.word.toLowerCase().split('');

    for (let index = 0; index < wordOne.length; index += 1) {
      let foundIndex = wordTwo.indexOf(wordOne[index]);

      if (foundIndex === -1) {
        return false;
      }

      wordTwo.splice(foundIndex, 1);
    }

    if (wordTwo.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Anagram;
