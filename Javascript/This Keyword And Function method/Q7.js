function multiplyNumbers(a, b) {
  // Define a helper object with a method to multiply
  const multiplier = {
    multiply(x, y) {
      return x * y;
    }
  };

  // Use apply() to call multiply with [a, b]
  return multiplier.multiply.apply(null, [a, b]);
}
const result = multiplyNumbers(3, 5);
console.log(result); 
