/**
 * The dynamic programming implementation of 322. Coin change.
 *
 * Time complexity: O(mn)
 * Space complexity: O(n)
 *
 * @param coins
 * @param amount
 * @returns
 */
function coinChange(coins: number[], amount: number): number {
  /**
   * dp[i] indicates the fewest number of coins that make up the amount i.
   */
  const dp: number[] = new Array(amount + 1).fill(Infinity);
  dp[0] = 0
  const coinsLength = coins.length;
  for (let accumulatingAmount = 1; accumulatingAmount <= amount; accumulatingAmount++) {
    for (let j = 0; j < coinsLength; j++) {
      if (coins[j] <= accumulatingAmount) {
        dp[accumulatingAmount] = Math.min(
          dp[accumulatingAmount],
          // For example, when accumulatingAmount is 7 and coins[j] is 5,
          //  then the following is trying to find the value of
          //  dp[2]. Because dp[2] + 1 will make up to the amount of 7.
          dp[accumulatingAmount - coins[j]] + 1,
        );
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
