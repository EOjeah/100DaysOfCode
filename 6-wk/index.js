class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    //Code here
    if (!this.root) {
      this.root = new Node(value);
      return this;
    }
    let currNode = this.root;
    let newNode = new Node(value);
    while (currNode) {
      if (newNode.value < currNode.value) {
        if (!currNode.left) {
          currNode.left = newNode;
          return this;
        }
        currNode = currNode.left;
      } else {
        if (!currNode.right) {
          currNode.right = newNode;
          return this;
        }
        currNode = currNode.right;
      }
    }
  }
  lookup(value) {
    //Code here
    let node = this.root;
    while (node) {
      if (node.value === value) {
        return node;
      } else if (value < node.value) {
        node = node.left;
      } else if (value > node.value) {
        node = node.right;
      }
    }
    return null;
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9);
// tree.insert(8)
// tree.insert(7)

tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
debugger;
tree.insert(1);

tree.lookup(1);
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
