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

module.exports = steps;
