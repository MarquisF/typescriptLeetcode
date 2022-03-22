/**
 * The dynamic programming implement of 516. Longest palindromic subsequence
 *
 * Time complexity: O(n^2)
 * Space complexity: O(n^2)
 * @param s
 * @returns
 */
function longestPalindromeSubseq(s: string): number {
  const length = s.length;
  /**
   * The matrix dp[i][j] stands for
   *  the length of the longest palindromic subsequence
   *  between index i and index j.
   *
   * dp[i][j] =
   *   condition 1: dp[i + 1][j -  1] + 2 ---------- if s[i] == s[j]
   *      or
   *   condition 2: max(dp[i + 1][j], dp[i][j - 1]) ---- if s[i] != s [j]
   *      or
   *   condition 3: 0 ------------------------------ if i > j
   */
  let dp = new Array(length).fill(0).map(() => new Array(length).fill(0));
  for (let i = length - 1; i >= 0; i--) {
    dp[i][i] = 1;
    for (let j = i + 1; j < length; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][length - 1];
};
