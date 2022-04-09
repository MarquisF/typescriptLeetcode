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

 function checkIsValidBST(root: TreeNode | null, lowest: number, highest: number): boolean {
  if (root === null) {
    return true;
  } else if (root.val <= lowest || root.val >= highest) {
    return false;
  }
  return checkIsValidBST(root.left, lowest, root.val) && checkIsValidBST(root.right, root.val, highest);
}

function isValidBST(root: TreeNode | null): boolean {
  return checkIsValidBST(root, -Infinity, Infinity);
};
