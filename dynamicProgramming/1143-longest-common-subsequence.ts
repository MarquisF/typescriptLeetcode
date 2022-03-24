/**
 * The dynamic programming implementation of 1143. Longest common subsequence.
 *
 * Time complexity: O(mn)
 * Space complexity: O(mn)
 *
 * @param text1
 * @param text2
 * @returns
 */
function longestCommonSubsequence(text1: string, text2: string): number {
  const text1Length = text1.length;
  const text2Length = text2.length;
  /**
   * dp[i][j] represents the length of the longest common
   *  subsequence  of text1[0:i] and text2[0:j].
   * text1[0:i] represents the length i prefix of text.
   * text2[0:j] represents the length j prefix of text.
   *
   * Therefore, the values of dp[0][j] and dp[i][0] will always be zero since
   *  the prefix length is zero.
   * And for the same reason,
   *  the size of the dp[i][j] will be (text1.length + 1) * (text2.length + 1).
   *
   * dp[i][j] =
   *  condition 1: dp[i-1][j-1] + 1 ------------- if text[i] == text[2]
   *  condition 2: max(dp[i][j-1], dp[i-1][j])--- if text[i] == text[2]
   */
  const dp: number[][] = new Array(text1Length + 1).fill(0).map(() => new Array(text2Length + 1).fill(0));
  for (let i = 1; i <= text1Length; i++) {
    for (let j = 1; j <= text2Length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          dp[i][j - 1],
        );
      }
    }
  }
  return dp[text1Length][text2Length];
};
