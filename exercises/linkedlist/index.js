// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head); // Create new Node instance passing in data and assigning this.head to the next property of the node
    this.head = node; // Reassign head property to new Node instance
  }
}

module.exports = { Node, LinkedList };
