// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i; // ASSUME i is the index of the minimum value

    for (let j = i + 1; j < arr.length; j++) {
      // Iterate over elements to the right of i (i.e. to the right of the current index)
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j; // If there is an element less than the assumed minimum, then update the indexOfMin to the index of that element
      }
    }

    // If i did not represent the mimimum's index, swap the two elements at i and at indexOfMin
    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin]; // Retain this reference for a successful swap
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr; // Return sorted array (from least to greatest)
}

function mergeSort(arr) {
  // Base case: array can't be further subdivided, so return the array.
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2); // center is index of midpoint element of arr
  const left = arr.slice(0, center); // left is an array of elements from arr from index 0 up to but excluding center
  const right = arr.slice(center); // right is an array of elements from arr from index center up to end of arr

  return merge(mergeSort(left), mergeSort(right)); // recursive call will eventually return sorted results array
}

function merge(left, right) {
  const results = [];

  // while there are still elements in both arrays, sort the lesser value first into results
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
  /*
  - Return statement creates a new empty array. It adds everything from results, then from left, then from right. Same as calling concat() multiple times.
  - It joins any elements remaining in left or right arrays and adds them to the results array.
  - It doesn't matter whether ...left or ...right comes first because by the time the while loop is exited, either left or right will be empty.
  - All remaining values in left or right are greater than the elements in the results array.
  */
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
