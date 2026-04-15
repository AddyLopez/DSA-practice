// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  let slow = list.head; // list.getFirst() is also acceptable
  let fast = list.head; // list.getFirst() is also acceptable

  // If the next two nodes don't exist, then fast can't advance by two nodes. It has therefore reached an end wherein slow is at the midpoint.
  while (fast.next && fast.next.next) {
    slow = slow.next; // Advance "slow" by one node
    fast = fast.next.next; // Advance "fast" by two nodes
  }

  return slow; // "slow" represents the midpoint of the list
}

module.exports = midpoint;
