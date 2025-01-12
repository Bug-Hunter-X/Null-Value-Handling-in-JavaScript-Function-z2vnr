function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Return 0 if either parameter is null
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
//Alternative solution: Throw an error
function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Parameters cannot be null');
  }
  return a + b;
}
console.log(foo(5,5));
console.log(foo(null,5));