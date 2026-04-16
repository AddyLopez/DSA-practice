// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data)); // Push in a new Node with the given data to the this.children array
  }

  remove(data) {
    // Reassign this.children to the filtered array, which only includes nodes with data that do not coincide with the passed-in data.
    this.children = this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift(); // Mutates the array, removing the first element at each iteration of the while loop
      for (let child of node.children) {
        arr.push(child); // This loop "unpacks" each child and pushes it individually into arr. Do NOT add children as a nested array (i.e. as a group).
      }

      fn(node); // Pass the given node into the provided function
    }
  }
}

/* 
In traverseBF, the for...of loop can be replaced with the spread syntax, like this: arr.push(...node.children); Each child will be pushed individually to arr.
*/

module.exports = { Tree, Node };
