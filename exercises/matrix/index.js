// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = []; // Create empty array to eventually hold n number of subarrays.

  for (let i = 0; i < n; i++) {
    results.push([]); // Push in n number of subarrays. Iteration continues for i < n because n represents the length property of the array, not its final index.
  }

  // All these variables' values will change as the results matrix gets populated.
  let counter = 1; // Keeps track of what number gets assigned to the results array.
  let startColumn = 0;
  let startRow = 0;
  let endColumn = n - 1; // Represents index of final column relative to length n.
  let endRow = n - 1; // Represents index of final row relative to length n.

  // The final iteration of the while loop will be when startColumn equals endColumn and startRow equals endRow.
  while (startColumn <= endColumn && startRow <= endRow) {
    // Top unassigned row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++; // Now that startRow has been populated, move startRow down by 1

    // Rightmost unassigned column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--; // Now that the endColumn has been populated, move endColumn left by 1

    // Bottom unassigned row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--; // Now that endRow has been populated, move endRow up by 1

    // Leftmost unassigned column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++; // Now that startColumn has been populated, move startColumn right by 1
  }

  return results; // Return n by n spiral matrix
}

module.exports = matrix;
