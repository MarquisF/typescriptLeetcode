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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  let ancestor = root;
  while (true) {
    if (p.val < ancestor.val && q.val < ancestor.val) {
      // List nodes p and q exist on the left child tree.
      ancestor = ancestor.left;
    } else if (p.val > ancestor.val && q.val > ancestor.val) {
      // List nodes p and q exist on the left child tree.
      ancestor = ancestor.right;
    } else {
      break;
    }
  }
  return ancestor;
};
