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

function checkChildren(root: TreeNode | null, targetSum: number, sum: number): boolean {
  if (root === null) return false;
  const newSum = sum + root.val;
  if (root.left === null && root.right === null) {
    return newSum === targetSum;
  }
  return checkChildren(root.left, targetSum, newSum) || checkChildren(root.right, targetSum, newSum);
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  return checkChildren(root, targetSum, 0);
};
