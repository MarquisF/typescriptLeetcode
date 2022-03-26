/**
 * The dynamic programming implementation of 377. Combination Sum IV.
 *
 * Time complexity: O(nums.length * target)
 * Space complexity: O(target)
 *
 * @param nums
 * @param target
 * @returns
 */
function combinationSum4(nums: number[], target: number): number {
  /**
   * dp[n] indicates the possible combinations count when the target
   *  is n.
   */
  const dp: number[] = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (const num of nums) {
      if (num <= i) {
        dp[i] += dp[i - num];
      }
    }
  }
  return dp[target];
};
