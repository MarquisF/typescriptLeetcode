/**
 * The greedy algorighm implementation of 55. Jump Game.
 *
 * @param nums
 * @returns
 */
function canJump(nums: number[]): boolean {
  let maxRight = nums[0];
  for (let i = 0; i < nums.length; i ++) {
      if (i > maxRight) return false;
      maxRight = Math.max(maxRight, nums[i] + i);
      if (maxRight >= nums.length -1) return true;
  }
  return false;
};
