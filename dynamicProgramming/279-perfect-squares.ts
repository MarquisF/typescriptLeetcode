/**
 * The dynamic programming implementation of 279-perfect-squares.
 *
 * Time complexity: O(n * sqrt(n))
 * Space complexity: O(n)
 *
 * @param n
 * @returns
 */
function numSquares(n: number): number {
  const squareNumList: number[] = [];
  let squareNumCounter = 1;
  while (squareNumCounter * squareNumCounter <= n) {
    const newSquareNum = squareNumCounter * squareNumCounter;
    squareNumList.push(newSquareNum);
    squareNumCounter++;
  }

  /**
   * dp[i] indicates the least count of perfect
   *  square numbers that sum to i.
   *
   * dp[i]:
   *  condition 1 -- 1 --------- i is a square number itself;
   *  condition 2 -- getMinCountBySquareNumList(i) ---i is not a square number.
   *
   * getMinCountBySquareNumList(i):
   *  Find all square numbers which are smaller than i,
   *  calculate the required least count related to these square numbers by
   *    eachLeastCount = dp[i - squareNum] + 1,
   *  and then assign the largest result to dp[i].
   *
   */
  const dp: number[] = [];
  for (let i = 1; i <= n; i++) {
    if (squareNumList.includes(i)) {
      dp[i] = 1;
      continue;
    }

    let leastCount = Infinity;
    for (const squareNum of squareNumList) {
      // Prevent useless calculations in for of loop.
      if (squareNum >= i) {
        break;
      }

      leastCount = Math.min(
        leastCount,
        dp[i - squareNum] + 1,
      );
    }
    dp[i] = leastCount;
  }
  return dp[n];
};
