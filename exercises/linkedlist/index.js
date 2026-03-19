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
    this.head = new Node(data, this.head); // Create new Node instance passing in data and assigning this.head to the next property of the node. Reassign head property of LinkedList to new Node instance.
  }

  size() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentNode = this.head;
    while (currentNode && currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

module.exports = { Node, LinkedList };

// Alternative to getLast:
/*
getLast() {
    if(!this.head) {
        return null;
    }}
    let node = this.head;
    while(node) {
        if(!node.next) {
            return node;
            }
        node = node.next
    }
}
*/
