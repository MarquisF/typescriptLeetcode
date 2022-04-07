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
function leftRightSwap(root: TreeNode | null) {
  if (root === null) {
    return;
  }
  const right = root.right;
  root.right = root.left;
  root.left = right;
  if (root.left) leftRightSwap(root.left);
  if (root.right) leftRightSwap(root.right);
}

function invertTree(root: TreeNode | null): TreeNode | null {
  leftRightSwap(root);
  return root;
};
