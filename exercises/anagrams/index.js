// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function buildCharMap(str) {
  const charMap = {};

  // Use a for...of loop to iterate over the characters of the string. The string has been modified using a regex so that punctuation and spaces are replaced with empty strings to eliminate them when comparing the character maps later.
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1; // If found, increment the value at the given character (i.e. key) by 1; otherwise, initialize the undefined value to 1.
  }

  return charMap; // Return the populated character map
}

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA); // Use helper function to build a character map of string A. The character map is an object.
  const bCharMap = buildCharMap(stringB); // User helper function to build a character map of string B. The character map is an object.

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false; // If the number of keys in each character map isn't equal, then the two strings passed into the anagrams function are NOT anagrams.
  }

  // Use for...in loop because character map is an object.
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false; // If the value at a given character (i.e. key) of the character map doesn't match the value at the identical key in the other character map, then the two strings are NOT anagrams.
    }
  }

  return true; // If the two cases above don't apply, then the two strings ARE anagrams.
}

module.exports = anagrams;
