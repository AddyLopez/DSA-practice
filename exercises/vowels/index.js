// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowelsArr = ["a", "e", "i", "o", "u"]; // array of vowels
  let count = 0; // counts number of vowels in "str"

  // lowercase the string, split it into an array, map over the array of characters
  str
    .toLowerCase()
    .split("")
    .map((char) => {
      if (vowelsArr.includes(char)) {
        count++; // If the vowels array includes the given character, increment the count
      }
    });

  return count; // Return the total number of vowels in "str"
}

// Alternative method using for...of loop :
/*
function vowels(str) {
  let count = 0;
  const checker = ["a", "e", "i", "o", "u"];

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }

  return count;
}
  */

// Alternative method using regex:
/*
function vowels(str) {
  // match is String method for matching a string against a regular expression. This regex checks vowels.
  // Option g makes sure evaluation does not halt at the first match, while option i means "case insensitive".
  // match will evaluate to either null or an array of matched characters
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0; // If matches is truthy (i.e. an array), return matches.length (i.e. the total count of vowels matched); if matches is falsy (i.e. null) return 0 (i.e. zero vowels found)
}
*/

module.exports = vowels;
