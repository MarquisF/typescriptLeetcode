/**
 * The dynamic programming implementation of Delete and earn.
 *
 * @param nums
 * @returns
 */
function deleteAndEarn(nums: number[]): number {
  let maxValue = 0;
  for (let value of nums) {
    maxValue = Math.max(maxValue, value);
  }
  const valueArray = (new Array(maxValue + 1)).fill(0);
  for (let value of nums) {
    valueArray[value] = valueArray[value] + value;
  }
  return _basicRob(valueArray);
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
