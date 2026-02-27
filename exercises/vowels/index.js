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

module.exports = vowels;
