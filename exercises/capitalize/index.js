// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Method 1:
function capitalize(str) {
  const words = [];

  // Iterate over each word the string (split along spaces into words) using a for...of loop
  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1)); // Uppercase the first letter of each word and concatenate the remaining letters (from index 1 to the end)
  }

  return words.join(" "); // Join words sepearated by a space into a string. Return string (each word has now been capitalized).
}

// Method 2:

module.exports = capitalize;
