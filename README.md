# JavaScript Null Value Handling Bug
This repository demonstrates a common bug in JavaScript related to the handling of null values in function parameters. The function `foo` adds two numbers, but it doesn't correctly handle the case where one or both parameters are null.

## Bug Description
The `foo` function fails to handle null input values correctly.  It should provide a more robust response when encountering null values, rather than simply returning null.

## Bug Solution
The solution improves the function's robustness by explicitly checking for null values and either handling them appropriately (returning a default value, throwing an error, or similar) or providing a more informative response.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` to see the buggy implementation of `foo`.
3. Run `bug.js` using a Node.js environment. Observe the output when passing null values as parameters.
4. Open `bugSolution.js` to see the corrected implementation.
5. Run `bugSolution.js` to observe the correct handling of null values.