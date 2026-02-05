// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Method 1:
function reverse(str) {
  const arr = str.split(""); // Convert string to array of characters
  arr.reverse(); // Reverse sort the array
  return arr.join(""); // Convert mutated array to a string
}

module.exports = reverse;
