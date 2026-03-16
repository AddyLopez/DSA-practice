// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  // constructor function will be called each time a new instance of Queue is invoked
  constructor() {
    this.data = []; // Initialized to an empty array to store records. The property "data" could have been named anything.
  }

  add(record) {
    this.data.unshift(record); // The unshift method inserts a record at the beginning of the array
  }

  remove() {
    return this.data.pop(); // The pop method removes a record from the end of the array. Return the element that was removed (presumably since you'd want to do something with it).
  }
}

module.exports = Queue;
