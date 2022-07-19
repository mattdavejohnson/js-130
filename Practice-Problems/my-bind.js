// Create a function myBind that accepts two arguments:
// 1: The function to bind
// 2: The context object
// It should return a new function that's hard-bound to the passed in
// context object.

function myBind(func, context) {
  return function () {
    return func.apply(context, arguments);
  };
}

function myFunc() {
  console.log(
    `My name is ${this.name} and I am an ${this.age} year old ${this.species}!`
  );
}

let obj = {
  name: 'Sam',
  age: 11,
  species: 'Dog',
};

let newFunc = myBind(myFunc, obj);

newFunc();
