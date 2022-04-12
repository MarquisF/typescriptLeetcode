/**
 *
 * @param nums
 * @returns
 */
function majorityElement(nums: number[]): number {
  nums.sort((a, b) => a - b);
  return nums[(nums.length / 2) | 0]
};