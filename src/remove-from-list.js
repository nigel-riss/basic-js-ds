const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
const removeKFromList = (l, k) => {
  let cleanHead = new ListNode(null)
  let cleanTail = cleanHead
  let pointer = l

  while(pointer) {
    if (pointer.value !== k) {
      cleanTail.next = new ListNode(pointer.value)
      cleanTail = cleanTail.next
    }

    pointer = pointer.next
  }

  return cleanHead.next
}

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

const initial = convertArrayToList([1, 2, 3]);
const expected = convertArrayToList([1, 2]);
console.log(removeKFromList(initial, 3), expected);

module.exports = {
  removeKFromList
};
