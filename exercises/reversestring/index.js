// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Method 1:
/*function reverse(str) {
  return str
    .split("") // Convert string to array of characters
    .reverse() // Reverse sort the array
    .join(""); // Convert mutated array to a string
}*/

// Method 2:
/* function reverse(str) {
  let reversed = ""; // Create an empty string

  // Iterate over each character of the string
  for (let character of str) {
    reversed = character + reversed; // Add each character to the start of 'reversed'
  }
  return reversed; // Return the variable 'reversed'
} */

/*
// Alternative syntax to Method 2:
function reverse(str) {
  let reversed = ""; // Create an empty string

  // Iterate over each character of the string
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed; // Add each character to the start of 'reversed'
  }
  console.log(reversed);
  return reversed; // Return the variable 'reversed'
}
*/

// Method 3:
function reverse(str) {
  // 1) Use split method to convert string to an array of characters,
  // 2) Initialize accumulator to an empty string and use reduce method to iterate over the array of characters
  // 3) In callback of reduce, add each subsequent character to the beginning of the string, effectually reducing the original string passed in to the reverse function.
  // 4) Return the reversed string.
  return str.split("").reduce((accumulator, character) => {
    return character + accumulator;
  }, "");
}

module.exports = reverse;
