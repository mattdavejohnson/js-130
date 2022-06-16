// Write a function that acts like the built-in filter method

function filter(array, callback) {
  let returnArray = [];

  for (let index = 0; index < array.length; index += 1) {
    let current = array[index];

    if (callback(current)) {
      returnArray.push(current);
    }
  }

  return returnArray;
}

let numbers = [1, 2, 3, 4, 5];

console.log(filter(numbers, (number) => number > 3));
console.log(filter(numbers, (number) => number < 0));
console.log(filter(numbers, () => true));

let values = [1, 'abc', null, true, undefined, 'xyz'];

console.log(filter(values, (value) => typeof value === 'string'));
