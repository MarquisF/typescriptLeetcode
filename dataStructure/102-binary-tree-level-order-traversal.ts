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

 function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];
  const result: number[][] = [];
  let rowNodeQueue: TreeNode[] = [root];
  while(rowNodeQueue.length > 0) {
    const originNodeQueueLength = rowNodeQueue.length;
    const newResultRow: number[] = []
    for (let i = 0; i < originNodeQueueLength; i ++) {
      const firstNodeInQueue = rowNodeQueue.shift();
      if (firstNodeInQueue.left) rowNodeQueue.push(firstNodeInQueue.left);
      if (firstNodeInQueue.right) rowNodeQueue.push(firstNodeInQueue.right);
      newResultRow.push(firstNodeInQueue.val);
    }
    result.push(newResultRow);
  }
  return result;
};
