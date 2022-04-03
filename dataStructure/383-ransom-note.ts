/**
 * 383. Ransom note.
 *
 * Time complexity: O(m + n)
 * Space complexity: O(1)
 *
 * @param ransomNote
 * @param magazine
 * @returns
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
  const cnt = new Array(26).fill(0);
  for (const character of magazine) {
    cnt[character.charCodeAt(0) - 97]++;
  }
  for (const character of ransomNote) {
    cnt[character.charCodeAt(0) - 97]--;
    if (cnt[character.charCodeAt(0) - 97] < 0) {
      return false;
    }
  }
  return true;
};
