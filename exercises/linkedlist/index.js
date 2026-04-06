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

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }

    return;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      // list is not empty
      last.next = new Node(data);
    } else {
      // list is empty
      this.head = new Node(data);
    }
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

// Alternative to removeFirst:
/*
    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }
*/
