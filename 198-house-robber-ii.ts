/**
 * The dynamic programming implementation of House robbers II.
 *
 * @param nums
 * @returns
 */
function robII(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1])
  return Math.max(_basicRob(nums.slice(0, -1)), _basicRob(nums.slice(1)));
};


function _basicRob(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  let prev2 = nums[0];
  let prev1 = Math.max(prev2, nums[1]);
  if (nums.length < 3) {
    return Math.max(prev1, prev2)
  }
  let current = Math.max(prev2 + nums[2], prev1);
  for (let i = 3; i < nums.length; i ++) {
    prev2 = prev1;
    prev1 = current;
    current = Math.max(prev2 + nums[i], prev1);
  }
  return current;
}
