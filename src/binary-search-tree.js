const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
Implement simple binary search tree according to task 
description using Node from extensions
*/


class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  // Возвращает корневой Нода.
  root() {
    return this.rootNode;
  }

  // Добавление элемента в дерево.
  add(data) {
    const node = this.rootNode;
    if (node === null) {
      this.rootNode = new Node(data);
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) { node.left = new Node(data);
          } else return searchTree(node.left);
        } 
        if (data > node.data) {
          if (node.right === null) { node.right = new Node(data);
          } else return searchTree(node.right);
        } else return null;
      };
      return searchTree(node);
    }
  }

  // Поиск элемента в дереве и возврат его
  find(data) {
    let current = this.rootNode;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else current = current.right;
      
      if (current === null) return null;
    }
    return current;
  }

  // Поиск элемента в дереве
  has(data) {
    let current = this.rootNode;
    while (current) {
      if (data === current.data) return true;
      if (data < current.data) {
        current = current.left;
      } else current = current.right;
    }
    return false;
  }

  // Удаление элемента из дерева
  remove(data) {
    const removeNode = function(node, data) {
      if (data === node.data) {
        // Нода не имеет потомков
        if (node.left === null && node.right === null || node === null) {
          return null;
        }

        // Нода имеет только одного потомка
        if (node.left === null) return node.right;
        if (node.right === null) return node.left;

        // Нода имеет двух потомков
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.rootNode = removeNode(this.rootNode, data);
  }


  // Поиск максимального элемента в дереве.
  max() {
    let current = this.rootNode;
    // let current = this.minmax((this.rootNode).right);
    while (current.right !== null) {
      current = current.right;
    }

    // return current.current.right ;
    return current.data;
  }

  // minmax(cur) {
  //   while (cur !== null) {
  //     current = cur;
  //   }
  //   return current;
  // }

  // Поиск минимального элемента в дереве

  min() {
    let current = this.rootNode;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
}



module.exports = {
  BinarySearchTree
};