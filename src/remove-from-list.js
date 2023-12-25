const { NotImplementedError } = require('../extensions/index.js');

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
 function removeKFromList(l, k) {

  let listNode = new ListNode();

  let curList = listNode;
  curList.next = l;


  while (curList.next) {
    if (curList.next.value === k) {
      // обновляет указатель на начало списка
      curList.next = (curList.next).next;
    } else {
      curList = curList.next;
    }
  }

  return listNode.next;
}

module.exports = {
  removeKFromList
};

// https://medium.com/@shehanPW/remove-k-from-list-codesignal-algorithms-problem-regarding-linked-lists-897a3f39e48f#:~:text=Given%20a%20singly%20linked%20list%20of%20integers%20l,%3D%20%5B1%2C%202%2C%203%2C%204%2C%205%2C%206%2C%207%5D.