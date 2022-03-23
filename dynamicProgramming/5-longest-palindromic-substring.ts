/**
 * The centre expanding solution of 5. Longest palindromic substring.
 * @param s
 * @returns
 */
function longestPalindrome(s: string): string {
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    const maxLengthBySingleCenter = getMaxLengthPalindromByCenterIndex({
      targetStr: s,
      centerStartIndex: i,
      centerEndIndex: i,
    });
    const maxLengthByDoubleCenter = getMaxLengthPalindromByCenterIndex({
      targetStr: s,
      centerStartIndex: i,
      centerEndIndex: i + 1,
    });
    const maxLength = Math.max(maxLengthBySingleCenter, maxLengthByDoubleCenter);
    if (maxLength > end - start) {
      start = i - (Math.ceil(maxLength / 2) - 1);
      end = start + maxLength - 1;
    }
  }
  return s.slice(start, end + 1);
};

function getMaxLengthPalindromByCenterIndex(payload: {
  targetStr: string,
  centerStartIndex: number,
  centerEndIndex: number,
}) {
  let { centerStartIndex, centerEndIndex, targetStr } = payload;
  while (centerStartIndex >= 0 && centerEndIndex < targetStr.length && targetStr[centerStartIndex] === targetStr[centerEndIndex]) {
    centerStartIndex--;
    centerEndIndex++;
  }
  return centerEndIndex - centerStartIndex - 1;
}
