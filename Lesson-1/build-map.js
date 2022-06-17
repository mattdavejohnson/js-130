// Write a function that acts like the built-in map method

function map(array, callback) {
  let returnedArray = [];

  for (let index = 0; index < array.length; index += 1) {
    let current = array[index];

    returnedArray.push(callback(current));
  }

  return returnedArray;
}

let numbers = [1, 2, 3, 4, 5];

console.log(map(numbers, (number) => number * 3));
console.log(map(numbers, (number) => number + 1));
console.log(map(numbers, () => false));

let values = [1, 'abc', null, true, undefined, 'xyz'];

console.log(map(values, (value) => String(value)));
