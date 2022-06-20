// Write a function that works like filter but that uses reduce to filter
// the input array

function filter(array, callback) {
  let returnArray = array.reduce(function (acc, element) {
    if (callback(element)) {
      acc.push(element);
    }

    return acc;
  }, []);

  return returnArray;
}

let numbers = [1, 2, 3, 4, 5];

console.log(filter(numbers, (number) => number > 3));
console.log(filter(numbers, (number) => number < 0));
console.log(filter(numbers, () => true));

let values = [1, 'abc', null, true, undefined, 'xyz'];

console.log(filter(values, (value) => typeof value === 'string'));
