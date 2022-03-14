/**
 * The dynamic programming implementation of 139.
 * 
 * dp[i] ==
 *  dp[j] &&
 *  (If s[i ... j - 1] is included in the dictionary)
 * 
 * 👆 And therefore it's i <= s.length not i < s.length
 * 
 * Time complexity: O(n^2)
 * Space complexity: O(n)
 * 
 * @param s 
 * @param wordDict 
 * @returns 
 */
function wordBreak(s: string, wordDict: string[]): boolean {
  const length = s.length;
  const dp: boolean[] = [true];
  // On leetcode, it seems the function
  //  Array.prototype.includes
  //  runs slower than the function Set.prototype.has.
  //
  // 👆 15-Mar-2022
  //
  const set = new Set(wordDict);
  for (let i = 1; i <= length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && set.has(s.slice(j, i))) {

        dp[i] = true;
        break;
      }
    }
    dp[i] = !!dp[i];
  }
  return dp[length];
};
