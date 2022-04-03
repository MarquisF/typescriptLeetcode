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

/**
 * Time complexity: O(m + n)
 * Space complexity: O(1)
 * @param list1
 * @param list2
 * @returns
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let head = new ListNode;
  let cursor = head;
  while (list1 !== null || list2 !== null) {
    if (list2 === null) {
      cursor.next = list1;
      list1 = list1.next
    } else if (list1 === null) {
      cursor.next = list2;
      list2 = list2.next;
    } else if (list1.val < list2.val) {
      cursor.next = list1;
      list1 = list1.next;
    } else {
      cursor.next = list2;
      list2 = list2.next;
    }
    cursor = cursor.next;
  }
  return head.next;
};