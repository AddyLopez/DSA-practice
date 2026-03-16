// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require("./queue"); // This data structure includes the add, remove, and peek methods

function weave(sourceOne, sourceTwo) {
  const wovenQ = new Queue(); // Create new instance of Queue to combine the two quees passed in to weave function

  // While loop iterates while sourceOne or sourceTwo is truthy (i.e. not undefined). (The peek method will return undefined when there are no elements left in its respective queue.)
  while (sourceOne.peek() || sourceTwo.peek()) {
    // Use peek to check if there are any elements left in sourceOne queue
    if (sourceOne.peek()) {
      wovenQ.add(sourceOne.remove()); // Remove the element from sourceOne and add the element to wovenQ
    }

    // Use peek to check if there are any elements left in sourceTwo queue
    if (sourceTwo.peek()) {
      wovenQ.add(sourceTwo.remove()); // Remove the element from sourceTwo and add the element to wovenQ
    }
  }

  return wovenQ; // Return the woven queue which combines the queues sourceOne and sourceTwo
}

module.exports = weave;
