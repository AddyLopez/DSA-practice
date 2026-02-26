// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Method 1: Iterative Solution
/*
function steps(n) {
  // Iterate over rows
  for (let row = 0; row < n; row++) {
    let stair = ""; // Initialize stair to empty string
    // Nested loop: iterate over columns
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#"; // If column number is less than or equal to the row number, use addition assignment to concatenate a pound sign to 'stair'
      } else {
        stair += " "; // Otherwise, use addition assignment to concatenate a space to 'stair'
      }
    }
    console.log(stair); // Before iterating over the next row, log the stair
  }
}
*/

// Method 2: Recursive Solution
function steps(n, row = 0, stair = "") {
  // Base case
  if (n === row) {
    return;
  }

  // Once the stair length has been completed (i.e. the end of a row is reached)...
  if (n === stair.length) {
    console.log(stair); // Log the completed stair
    return steps(n, row + 1); // Make recursive call to the next row. 'stair' is defaulted to an empty string.
  }

  // This condition checks stair.length which is effectually a stand-in for tracking the column of each row
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " "; // Concatenates a space (NOT an empty string)
  }

  steps(n, row, stair); // Make recursive call to next "column" in same row when visualizing the stairs as a 2D matrix. stair.length is effectually a stand-in for the column.
}

module.exports = steps;
