const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null
  }

  root() {
    return this._root
  }

  add(data) {
    const addWithin = (node, data) => {
      if (!node) { 
        return new Node(data)
      }

      if (node.data === data) { return node }

      if (data < node.data) {
        node.left = addWithin(node.left, data)
      } else {
        node.right = addWithin(node.right, data)
      }

      return node
    }

    this._root = addWithin(this._root, data)
  }

  has(data) {
    return this.find(data) !== null
  }

  find(data) {
    const searchWithin = (node, data) => {
      if (!node) { return null }
      
      if (node.data === data) {
        return node
      }


      if (node.data > data) {
        return searchWithin(node.left, data)
      } else {
        return searchWithin(node.right, data)
      }
    }

    return searchWithin(this._root, data)
  }

  remove(data) {
    const removeWithin = (node, data) => {
      if (!node) { return null }

      if (data < node.data) {
        node.left = removeWithin(node.left, data)
        return node
      } else if (data > node.data) {
        node.right = removeWithin(node.right, data)
        return node
      } else {
        // Is leaf
        if (!node.left && !node.right) {
          return null
        }

        // Has right branch
        if (!node.left) {
          node = node.right
          return node
        }

        // Has left branch
        if (!node.right) {
          node = node.left
          return node
        }

        // Both branches exist
        let minFromRight = node.right
        while(minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data

        node.right = removeWithin(node.right, minFromRight.data)

        return node
      }
    }

    this._root = removeWithin(this._root, data)
  }

  min() {
    const getMinWithin = (node) => {
      if (!node) { return null }

      if (!node.left) {
        return node.data
      } else {
        return getMinWithin(node.left)
      }
    }

    return getMinWithin(this._root)
  }

  max() {
    const getMaxWithin = (node) => {
      if (!node) { return null }

      if (!node.right) {
        return node.data
      } else {
        return getMaxWithin(node.right)
      }
    }

    return getMaxWithin(this._root)
  }
}


const tree = new BinarySearchTree();
tree.add(3);
tree.add(2);
tree.add(4);
console.log(tree.root())
console.log(tree.find(2))



module.exports = {
  BinarySearchTree
};
