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

 function removeElements(head: ListNode | null, val: number): ListNode | null {
  const localHead = new ListNode();
  let cursor = localHead;
  while (head) {
    if (head.val !== val) {
      cursor.next = head;
      cursor = cursor.next;
    }
    head = head.next;
  }
  cursor.next = null;
  return localHead.next;
};
