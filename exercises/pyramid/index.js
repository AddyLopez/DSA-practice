// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  // Evaluate midpoint
  const midpoint = Math.floor((2 * n - 1) / 2); // Calculate midpoint of total number of columns relative to n. Use Math.floor method to round down to proper index. Since midpoint is only evaluated once, it goes outside the for loops.

  // Loop through rows
  for (let row = 0; row < n; row++) {
    let level = ""; // Create empty string called level
    // Loop through columns
    for (let column = 0; column < 2 * n - 1; column++) {
      // IF column lies between midpoint - row and midpoint + row
      if (column <= midpoint + row && column >= midpoint - row) {
        level += "#"; // Concatenate a pound sign
      } else {
        level += " "; // ELSE concatenate a space (NOT an empty string)
      }
    }

    console.log(level); // Log level before iteration moves on to next row
  }
}

module.exports = pyramid;
