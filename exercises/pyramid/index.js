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

// Method 1: Iterative solution
/*
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
*/

// Method 2: Recursive solution
function pyramid(n, row = 0, level = "") {
  // Base case: Return upon completing the final row
  if (row === n) {
    return;
  }

  // (2 * n - 1) represents the total number of columns relative to n. level.length effectually tracks the current column
  if (level.length === 2 * n - 1) {
    console.log(level); // Log the 'level' string upon reaching the final column of the row
    return pyramid(n, row + 1); // Make recursive call and move on to the next row
  }

  const midpoint = Math.floor((2 * n - 1) / 2); // Midpoint is the total number of columns diided by 2 then rounded down to nearest integer.
  let add; // 'add' tracks what character to add (i.e. concatenate) to the string 'level' declared in the parameters section
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#"; // Concatenate a pound sign if current column (i.e. level.length) is between (midpoint - row) and (midpoint + row)
  } else {
    add = " ";
  }

  pyramid(n, row, level + add);
}

module.exports = pyramid;
