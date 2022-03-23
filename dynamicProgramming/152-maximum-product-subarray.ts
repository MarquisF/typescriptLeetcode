/**
 * The dynamic Programming implementation of 152.
 * @param nums
 * @returns
 */
function maxProduct(nums: number[]): number {
  let prevMax = nums[0];
  let prevMin = nums[0];
  let max = prevMax;
  for (let i = 1; i < nums.length; i++) {
      const currentMax = Math.max(nums[i], prevMax * nums[i], prevMin * nums[i]);
      const currentMin = Math.min(nums[i], prevMax * nums[i], prevMin * nums[i]);
      prevMax = currentMax;
      prevMin = currentMin;

      max = Math.max(max, currentMax);
  }
  return max;
};
