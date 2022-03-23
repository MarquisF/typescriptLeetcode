/**
 * 392. Is subsequence.
 *
 * Time complexity: O(n);
 * Space complexity: O(1);
 *
 * @param s
 * @param t
 * @returns
 */
function isSubsequence(s: string, t: string): boolean {
  const tLength = t.length;
  for (let i = 0; i < tLength; i ++) {
    if (s === '') return true;
    if (t[i] === s[0]) {
      s = s.slice(1);
    }
  }
  return s === '';
};
