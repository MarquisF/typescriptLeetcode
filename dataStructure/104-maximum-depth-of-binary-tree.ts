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

 function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  let depth = 0;
  const rowNodeQueue: TreeNode[] = [root];
  while (rowNodeQueue.length > 0) {
    const originRowNodeQueueLength = rowNodeQueue.length;
    for (let i = 0; i < originRowNodeQueueLength; i ++) {
      const firstNodeInQueue = rowNodeQueue.shift();
      if (firstNodeInQueue.left) rowNodeQueue.push(firstNodeInQueue.left);
      if (firstNodeInQueue.right) rowNodeQueue.push(firstNodeInQueue.right);
    }
    depth ++;
  }
  return depth;
};
