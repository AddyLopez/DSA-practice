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

  getAt(index) {
    let counter = 0; // Start at 0 since the nodes are zero-indexed
    let node = this.head; // Temporary variable for sake of iterating over the list of nodes

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    return null; // Accounts for index being out of range, including if the list is empty
  }

  removeAt(index) {
    // If list is empty, simply return
    if (!this.head) {
      return;
    }

    // Manually remove first node (at index 0) by reassigning the head to next. Works even for a list of only 1 node, since next will point to null.
    if (index === 0) {
      this.head = this.head.next;
    }

    const previous = this.getAt(index - 1); // Reuse the getAt method to conveniently get a reference to previous node
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next; // Skips over (i.e. removes) the node at the passed-in index. "previous" now points at the next next node.
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
