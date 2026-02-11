// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // Convert number to a string, then to an array of characters, reverse it, then join it into a string
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n); // Return the reversed string parsed as an integer with the proper sign
}

module.exports = reverseInt;
