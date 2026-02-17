// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Method 1:
/*
function chunk(array, size) {
  const chunked = []; // Create an empty array to eventually store array chunks. It will be an array of nested arrays.

  // Iterate over the elements of the array to chunk
  for (let element of array) {
    // Retrieve the element at the last index of chunked since at every successive iteration you'll only need to add a new nested array or an element within an existing but incomplete nested array.
    const last = chunked[chunked.length - 1]; // The last element of chunked will be either undefined or an array.

    // If last is undefined or its length is equal to the size it's supposed to be...
    if (!last || last.length === size) {
      chunked.push([element]); // then push an array with the given element into chunked.
    } else {
      last.push(element); // Otherwise, push the given element into last. Recall that last is an array nested within "chunked".
    }
  }

  return chunked; // Return the chunked array.
}
*/

// Method 2:
function chunk(array, size) {
  const chunked = []; // Create empty array to eventually hold nested chunked arrays.
  let index = 0; // Use let not const since index will get re-assigned in the while loop to feed into the slice method

  // While index is less than the length of the passed-in array...
  while (index < array.length) {
    chunked.push(array.slice(index, index + size)); // Slice the array from index to index plus size (which returns elements at index up to but excluding the element at index + size). Then push the new array (of length "size") into chunked.
    index += size; // Increment index by size and reassign index to the result. Same as index = index + size. This reassignment enables the loop to perform the slice function on successive indices of the passed-in array.
  }

  return chunked; // Return the chunked array
}

module.exports = chunk;
