// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

// Notes:
// Visualize one stack (FILO - First In Last Out / LIFO - Last In First Out) reversing its order by transferring its contents one by one to a second stack.
// The second stack enables popping off the top which is the (FIFO - First In First Out) first in the queue
// The while loops below take care of transferring elements (I imagine them as books) back and forth to preserve or reset the order of elements.
// The peek method is used to figure out whether there are any remaining elements to iterate over.

const Stack = require("./stack");

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  add(record) {
    this.stack1.push(record);
  }

  remove() {
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }
    let elementToRemove = this.stack2.pop();
    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.pop());
    }
    return elementToRemove;
  }

  peek() {
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }
    let elementToPeekAt = this.stack2.peek();
    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.pop());
    }
    return elementToPeekAt;
  }
}

module.exports = Queue;
