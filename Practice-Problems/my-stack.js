// Create a function newStack that, when called, returns a stack object
// with three methods: push, pop, and printStack.

function newStack() {
  let stack = [];

  return {
    push(item) {
      stack.push(item);
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      stack.forEach((item) => console.log(item));
    },
  };
}

let myStack = newStack();

myStack.push('first item');
myStack.push('second item');
myStack.push('third item');
myStack.printStack();
console.log(myStack.pop());
myStack.printStack();
