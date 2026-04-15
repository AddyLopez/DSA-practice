// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let slow = list.getFirst(); // Same as list.head
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next; // Advance "slow" by one node
    fast = fast.next.next; // Advance "fast" by two nodes

    if (slow === fast) {
      return true; // If slow and fast represent identical nodes, then the list is circular.
    }
  }

  return false; // If the while loop was exited, it means one of the conditions returned falsy (because it was null) and that there was an end to the list. Thus the list terminates and is not circular.
}

module.exports = circular;
