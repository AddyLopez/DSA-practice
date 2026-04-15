// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let trailing = list.getFirst(); // Start first pointer at head node
  let leading = list.getAt(n); // Start second pointer at nth node ("leading" is n nodes away from "trailing")

  // Exits at the end of the list when leading.next is null
  while (leading.next) {
    trailing = trailing.next; // Advance "trailing" by one node
    leading = leading.next; // Advance "leading" by one node
  }

  return trailing; // Once the while loop has been exited, "trailing" represents the node "n nodes away" from the tail node
}

// Alternative solution:
/*
function fromLast(list, n) {
    let trailing = list.getFirst();
    let leading = list.getFirst();

    while (n > 0) {
        leading = leading.next;
        n--;
    }

    while (leading.next) {
        trailing = trailing.next;
        leading = leading.next;
    }

  return trailing;
}

*/
module.exports = fromLast;
