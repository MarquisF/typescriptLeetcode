/**
 * 242. Valid anagram.
 *
 * Time complexity: O(m + n)
 * Space complexity: O(1)
 *
 * @param s
 * @param t
 * @returns
 */
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const cnt = new Array(26).fill(0);
  for (const char of s) {
    cnt[char.charCodeAt(0) - 97] ++;
  }
  for (const char of t) {
    cnt[char.charCodeAt(0) - 97] --;
    if (cnt[char.charCodeAt(0) - 97] < 0) {
      return false;
    }
  }
  return true;
};
