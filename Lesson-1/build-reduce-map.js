// Write a function that works like map but that uses reduce to transform
// the input array

function map(array, callback) {
  let returnedArray = array.reduce(function (acc, element) {
    acc.push(callback(element));

    return acc;
  }, []);

  return returnedArray;
}

let numbers = [1, 2, 3, 4, 5];

console.log(map(numbers, (number) => number * 3));
console.log(map(numbers, (number) => number + 1));
console.log(map(numbers, () => false));

let values = [1, 'abc', null, true, undefined, 'xyz'];

console.log(map(values, (value) => String(value)));
