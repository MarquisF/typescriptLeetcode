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

/**
 * There are two solutions in this file.
 *  1. Iteration solution
 *  2. Recursion solution
 */

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param root
 * @param val
 * @returns
 */
function insertIntoBST1(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) return new TreeNode(val);
  let pos = root;
  while (pos) {
    if (val < pos.val) {
      if (pos.left) {
        pos = pos.left;
      } else {
        pos.left = new TreeNode(val);
        break;
      }
    } else {
      if (pos.right) {
        pos = pos.right;
      } else {
        pos.right = new TreeNode(val);
        break;
      }
    }
  }
  return root;
};

/**
 * Recursion solution
 *
 * @param root
 * @param val
 * @returns
 */
function insertIntoBST2(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) {
    return new TreeNode(val);
  }
  if (val < root.val) {
    root.left = insertIntoBST2(root.left, val);
  } else {
    root.right = insertIntoBST2(root.right, val);
  }
  return root;
};
