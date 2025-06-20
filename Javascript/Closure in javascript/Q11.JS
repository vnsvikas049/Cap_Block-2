function outerFunction() {
  let message = "Hello from outer function!";

  function innerFunction() {
    console.log(message);
  }

  return innerFunction;
}

// Demonstrating closure
const myFunction = outerFunction();  // outerFunction is called, but not innerFunction
myFunction();  // innerFunction is called here, and still has access to `message`
