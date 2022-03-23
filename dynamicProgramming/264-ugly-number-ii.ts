/**
 * The Dynamic programming implementation of 264.
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 * @param n
 * @returns
 */
function nthUglyNumber(n: number): number {
  if (n === 1) { return 1 };
  let pointer2 = 0;
  let pointer3 = 0;
  let pointer5 = 0;
  const dp = [1];
  for (let i = 1; i < n; i++) {
    const newVal2 = dp[pointer2] * 2;
    const newVal3 = dp[pointer3] * 3;
    const newVal5 = dp[pointer5] * 5;
    const newVal = Math.min(newVal2, newVal3, newVal5);
    if (newVal === newVal2) {
      pointer2++;
    }
    if (newVal === newVal3) {
      pointer3++;
    }
    if (newVal === newVal5) {
      pointer5++;
    }
    dp.push(newVal);
  }
  return dp.pop();
};
