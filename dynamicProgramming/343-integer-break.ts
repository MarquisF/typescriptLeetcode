/**
 * The dynamic programming implementation of 343. Integer break.
 *
 * Time complexity: O(n*2)
 * Space complexity: O(n)
 *
 * @param n
 * @returns
 */
function integerBreak(n: number): number {
  if (n < 2) return 0;
  /**
   * dp[i] indicates the maximum product of the integers breaked from i.
   */
  const dp: number[] = [0, 0];
  for (let i = 2; i <= n; i ++) {
    let currentMax = 0;
    // The following index "firstBreakedInt" indicates
    //  the first positive integer breaked from i.
    // Where 1 <= firstBreakedInt < i because the number 1 is not breakable.
    //
    //
    // The two possibilities of the product when the first integer is breaked out:
    //    condition 1 -- i * (i - firstBreakedInt)   ---- If we do not break the value of (i - firstBreakedInt) to support the further multiplication operation.
    //
    //    condition 2 -- i * dp[i - firstBreakedInt]  --- If we break the value of (i - firstBreakedInt) to support the further multiplication operation.
    //
    //  Since both firstBreakedInt and i are smaller than i,
    //   the dp[i - firstBreakedInt] will always possess a value.
    //
    // It's required to find the maximum product of firstBreakedInt from 1 to i - 1
    //  and assign the maximum product to dp[i];
    //
    //
    for (let firstBreakedInt = 1; firstBreakedInt < i; firstBreakedInt ++) {
      const maxProductOfTheNewBreakOperation = Math.max(
        // Do not break the value of (i - firstBreakedInt).
        //
        firstBreakedInt * (i - firstBreakedInt),
        // Break the value of (i - firstBreakedInt).
        //
        firstBreakedInt * dp[i - firstBreakedInt],
      );
      currentMax = Math.max(
        currentMax,
        maxProductOfTheNewBreakOperation,
      );
    }
    dp[i] = currentMax;
  }
  return dp[n];
};
