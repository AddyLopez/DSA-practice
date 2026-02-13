// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  // Loop over numbers from 1 to n. Initialize i to 1, increment i by 1 while i is less than or equal to n.
  // "Else if" is used to exclude the other conditions and avoid misprintings, in case multiple conditions are successively met.
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      // If i is a multiple of 3 and 5, logically it is a multiple of 15. Print "fizzbuzz".
      console.log("fizzbuzz");
    } else if (i % 5 === 0) {
      // Else, if i is a multiple of 5, print "buzz".
      console.log("buzz");
    } else if (i % 3 === 0) {
      // Else, if i is a multiple of 3, print "fizz".
      console.log("fizz");
    } else {
      // Else, print the value of i.
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;
