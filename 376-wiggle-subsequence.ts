/**
 * 376. Wiggle subsequence.
 * Optimized dynamic programming.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param nums
 * @returns
 */
function wiggleMaxLength(nums: number[]): number {
  const length = nums.length;
  if (length === 1) {
    return 1;
  }

  /**
   * The length of the last longest wiggle sequence ending with a downtrend.
   */
  let longestEndingByDown = 1;
  /**
   * The length of the last longest wiggle sequence ending with an uptrend.
   */
  let longestEndingByUp = 1;
  for (let i = 1; i < nums.length; i++) {
    const newDiff = nums[i] - nums[i - 1];
    if (newDiff > 0) {
      longestEndingByUp = longestEndingByDown + 1;
    }
    if (newDiff < 0) {
      longestEndingByDown = longestEndingByUp + 1;
    }
  }
  return Math.max(longestEndingByUp, longestEndingByDown);
};
