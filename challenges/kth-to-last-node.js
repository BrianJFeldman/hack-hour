/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let length = 0;
  let current = head;
  let backTwo = head;
  while (current) {
    length++;
    if (length > 3) {
      backTwo = backTwo.next;
    }
    current = current.next;
  }
  return backTwo.value;
}

module.exports = { Node: Node, kthToLastNode: kthToLastNode };
