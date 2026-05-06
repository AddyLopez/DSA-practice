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

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
