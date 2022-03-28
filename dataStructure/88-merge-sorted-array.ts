/**
 Do not return anything, modify nums1 in-place instead.
 */

/**
 * The reversed double pointer solution of 88. Merger sorted array.
 *
 * Time complexity: O(m + n)
 * Space complexity: O(1)
 *
 * @param nums1
 * @param m
 * @param nums2
 * @param n
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let pointer1 = m - 1;
  let pointer2 = n - 1;
  let currentPos = m + n - 1;

  while (pointer1 > -1 || pointer2 > -1) {
    if (pointer1 === -1) {
      nums1[currentPos] = nums2[pointer2--];
    } else if (pointer2 === -1) {
      nums1[currentPos] = nums1[pointer1--];
    } else if (nums1[pointer1] > nums2[pointer2]) {
      nums1[currentPos] = nums1[pointer1--];
    } else {
      nums1[currentPos] = nums2[pointer2--];
    }
    currentPos--;
  }
};
