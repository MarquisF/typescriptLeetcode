/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

/**
 * Solution 1
 * @param head
 * @returns
 */
function hasCycleSolution1(head: ListNode | null): boolean {
  const iteratedNodes: ListNode[] = [];
  while (head) {
    if (iteratedNodes.includes(head)) {
      return true;
    }
    iteratedNodes.push(head)
    head = head.next;
  }
  return false;
};


/**
 * Solution 2
 * Floyd's cycle-finding algorithm
 *
 * This solution is much more faster
 *
 * @param head
 * @returns
 */
function hasCycleSolution2(head: ListNode | null): boolean {
  const iteratedNodes: ListNode[] = [];
  while (head) {
    if (iteratedNodes.includes(head)) {
      return true;
    }
    iteratedNodes.push(head)
    head = head.next;
  }
  return false;
};
