// Write a function that acts like the built-in reduce method

/*
Calls the specified callback function for all the elements in an array.
The return value of the callback function is the accumulated result, and
is provided as an argument in the next call to the callback function.

@param callbackfn — A function that accepts up to four arguments. The reduce
method calls the callbackfn function one time for each element in the array.

@param initialValue — If initialValue is specified, it is used as the initial
value to start the accumulation. The first call to the callbackfn function
provides this value as an argument instead of an array value.


A function that accepts up to four arguments. The reduce method calls the
callbackfn function one time for each element in the array.

Calls the specified callback function for all the elements in an array.
The return value of the callback function is the accumulated result, and
is provided as an argument in the next call to the callback function.
*/

// Reduce is called on an array and iterates through each element of that
// array. Reduce accepts a callback function as an argument and an initial
// value as an argument. The callback function is called once for each element
// in the array. The callback function accepts an accumulator argument and
// the current element as arguments. The accumulator is the initial value
// passed in if there was one, and if not it is the first element in the
// array. The current value is the current element of the array. Whatever the
// callback returns is used as the accumulator the next time the callback is
// called. Once all iteration is complete, the accumulator is returned.

function reduce(array, callback, initialValue = null) {
  let accumulator;

  if (initialValue !== null) {
    accumulator = initialValue;

    for (let index = 0; index < array.length; index += 1) {
      let current = array[index];

      accumulator = callback(accumulator, current);
    }
  } else {
    accumulator = array[0];

    for (let index = 1; index < array.length; index += 1) {
      let current = array[index];

      accumulator = callback(accumulator, current);
    }
  }

  return accumulator;
}

let numbers = [1, 2, 3, 4, 5];

console.log(reduce(numbers, (accum, number) => accum + number));
console.log(reduce(numbers, (prod, number) => prod * number));
console.log(reduce(numbers, (prod, number) => prod * number, 3));
console.log(reduce([], (accum, number) => accum + number, 10));
console.log(reduce([], (accum, number) => accum + number));

let stooges = ['Mo', 'Larry', 'Curly'];

console.log(
  reduce(
    stooges,
    (reversedStooges, stooge) => {
      reversedStooges.unshift(stooge);
      return reversedStooges;
    },
    []
  )
);
