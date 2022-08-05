// Write a program that can calculate the Hamming distance between two
// DNA strands.

/*
Problem:

  Point Mutation: replacing one base with another at a single nucleotide.
  Hamming Distance: for sequences of equal length, the number of point
    mutations that could have occurred between the two strands.


Examples/Test Cases:

Hamming distance of 7:

GAGCCTACTAACGGGAT
CATCGTAATGACGGCCT
^ ^ ^  ^ ^    ^^

*/

class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(distance) {
    let counter = 0;

    for (let index = 0; index < this.strand.length; index += 1) {
      if (!this.strand[index] || !distance[index]) {
        break;
      }
      if (this.strand[index] !== distance[index]) {
        counter += 1;
      }
    }

    return counter;
  }
}

module.exports = DNA;
