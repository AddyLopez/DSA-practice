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
function reverse(str) {
  let reversed = ""; // Create an empty string

  // Iterate over each character of the string
  for (let character of str) {
    reversed = character + reversed; // Add each character to the start of 'reversed'
  }
  return reversed; // Return the variable 'reversed'
}

module.exports = reverse;
