// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {}; // initialize character map to empty object
  let max = 0; // initialize maximum to zero. Eventually reassign it to the highest number found in character map.
  let maxChar = ""; // initialize empty string to eventually store character with maximum value (frequency)

  // Iterate over each character of the string.
  // If the value at the given key is falsy, assign it the value of 1.
  // Otherwise, if the key at that character already exists, increment the count by 1.
  // The numerical value reflects the character's frequency in the string.
  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  // Loop over the character map object. Here, char represents each key of the object charMap.
  // If the value at the given key is greater than the numerical value stored in max, reassign max to the value at that key.
  // Set the maxChar variable equal to that key.
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar; // Return the maxChar, which represents the character of highest recurrence in the string.
}

module.exports = maxChar;
