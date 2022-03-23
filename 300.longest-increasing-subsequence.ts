/**
 * The dynamic programming implementation of 300. Longest increasing subsequence.
 *
 * Time complexity: O(n^2)
 * Space complexity: O(n) ----- (In the following process,
 *  dp is an array with the length of nums.length.)
 * @param nums
 * @returns
 */
function lengthOfLIS(nums: number[]): number {
  /**
   * dp[i] is the longest increasing subsequence ending
   *  at index i. nums[i] is included in the sequence.
   */
  const dp = [1];
  const length = nums.length;
  /** The length of the longest increasing subsequence */
  let lisLength = 1;
  for (let i = 1; i < length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        // Consider the situation when nums == [0, 1, 0, 3, 2, 3].
        // In this input, dp[1] equals to 2 while dp[2] equals to 1,
        //  which means d[i] might be smaller than d[j]
        //  even though i is larger than j.
        // This is because the definition of dp[index] is
        //  that the dp[index] has to have nums[index] included.
        // So dp[i] equals to Math.max(dp[i], dp[j] + 1) but not
        //  dp[j] + 1.
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    lisLength = Math.max(dp[i], lisLength);
  }
  return lisLength;
};
