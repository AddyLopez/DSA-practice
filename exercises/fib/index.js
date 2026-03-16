// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Iterative Solution:
/*
function fib(n) {
  const series = [0, 1]; // Initialize series with first two given numbers in the series

  // Iterate from index 2 up to n (inclusive)
  for (let i = 2; i <= n; i++) {
    const a = series[i - 1]; // a represents next previous index in series array
    const b = series[i - 2]; // b represents second previous index in series array

    series.push(a + b); // Add previous two terms (i.e. a and b) and push the value into the series array
  }

  return series[n]; // It's conventional to return the value at the nth index in the series
}
*/

/*
// Recursive Solution:
function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}
*/

// Memoized recursive solution:
function memoize(fn) {
  const cache = {}; // The keys of the cache object are the arguments

  // returns an anonymous function. The spread syntax is used as "defensive coding" to account for any number of arguments (which here are stored as an array called "args").
  return function (...args) {
    if (cache[args]) {
      return cache[args]; // If the particular set of arguments has been passed into slowFib before, then return the value at cache[args].
    }

    // If code proceeds beyond if block above, slowFib has NOT been called before with the given set of arguments.
    const result = fn.apply(this, args); // result stores the result from calling slowFib function so that it can be stored in the cache object before getting returned
    cache[args] = result; // updates the cache by storing the result under the "args" key

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2); // These calls are NOT to slowFib but to the faster, memoized function fib.
}

const fib = memoize(slowFib); // memoize creates the cache before slowFib is called

module.exports = fib;
