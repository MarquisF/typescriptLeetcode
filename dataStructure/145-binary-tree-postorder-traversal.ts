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

 function postorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  postorder(root, result);
  return result;
};

function postorder(root: TreeNode | null, result: number[]) {
  if (root === null) return;
  postorder(root.right, result);
  result.push(root.val);
  postorder(root.left, result);
}
