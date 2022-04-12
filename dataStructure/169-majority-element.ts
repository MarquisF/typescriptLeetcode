/**
 *
 * @param nums
 * @returns
 */
function majorityElement(nums: number[]): number {
  nums.sort();
  return nums[(nums.length / 2) | 0]
};