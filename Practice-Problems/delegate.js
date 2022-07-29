// Write a delegate function that can be used to delegate the behavior of a
// method or function to another object's method.

function delegate(obj, method, ...additional) {
  return function () {
    return obj[method].apply(obj, additional);
  };
}

let foo = {
  name: 'test',
  bar: function (greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

let baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux(); // logs 'hello test';

foo.bar = function () {
  console.log('changed');
};

baz.qux(); // logs 'changed'
