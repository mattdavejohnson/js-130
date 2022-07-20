// Alter the myBind function to support partial function application

function myBind(func, context, ...additional) {
  return function (...args) {
    return func.apply(context, additional.concat(args));
  };
}

function addNumbers(num1, num2) {
  return num1 + num2;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(12));
