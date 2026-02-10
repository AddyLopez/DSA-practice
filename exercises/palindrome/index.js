// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Method 1:
/*
function palindrome(str) {
  // Reverse a string
  const reversed = str.split("").reverse().join("");
  // Compare reversed string to string
  // Return true or false
  return reversed === str;
}
*/

// Method 2 (inefficient due to double comparisons):
function palindrome(str) {
  // Convert string to array then call every() array method on the array. Pass in a callback function to every();
  return str.split("").every((character, index) => {
    // Compare each character to its counterpart (i.e. first to last, second to second-to-last, etc.). Return true if equal, otherwise false.
    return character === str[str.length - 1 - index]; // str.length-1 takes you to the end of the array, while subtracting the index effectually traverses the array in reverse
  });
}

module.exports = palindrome;
