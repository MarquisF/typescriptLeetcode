/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function checkIfAreMirror(left: TreeNode | null, right: TreeNode | null): boolean {
  if (!left && !right) return true;
  if (!left || !right) return false;

  // The conditions of two nodes are in a mirror.
  //
  return left.val === right.val &&
    checkIfAreMirror(left.left, right.right) &&
    checkIfAreMirror(left.right, right.left);
}

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param root
 * @returns
 */
function isSymmetric(root: TreeNode | null): boolean {
  return checkIfAreMirror(root.left, root.right);
};

/**
 * Solution 1
 * -----------------------------------------
 * Solution 2
 *
 */

/**
 * This is my old solution refered to the solutions
 *  of 145 and 102.
 *
 * @param root
 * @returns
 */
function isSymmetric2(root: TreeNode | null): boolean {
  if (root === null) return true;
  const queue: TreeNode[] = [root];
  while (queue.length > 0) {
    const originalQueueLength = queue.length;
    const stackOfTheCurrentRow: Array<number | null> = [];
    for (let i = 0; i < originalQueueLength; i++) {
      const firstInQueue = queue.shift();
      if (firstInQueue === null) {
        if (i < originalQueueLength / 2) {
          stackOfTheCurrentRow.push(null);
        } else {
          const poppedStackedItem = stackOfTheCurrentRow.pop();
          if (poppedStackedItem !== null) return false;
        }
        continue;
      }
      queue.push(firstInQueue.left);
      queue.push(firstInQueue.right);
      if (originalQueueLength === 1) continue;
      if (i < originalQueueLength / 2) {
        stackOfTheCurrentRow.push(firstInQueue.val);
      } else {
        const poppedStackItem = stackOfTheCurrentRow.pop();
        if (firstInQueue.val !== poppedStackItem) return false;
      }
    }
  }
  return true;
};

