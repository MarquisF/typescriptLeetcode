/**
 * The dynamic programming implementation of 518. Coin change 2.
 *
 * Time complexity: O(amount * coins.length)
 * Space complexity: O(amount)
 *
 * @param amount
 * @param coins
 * @returns
 */
function change(amount: number, coins: number[]): number {
  /**
   * dp[i] indicates the combinations amount of the amount i.
   */
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
for (let coin of coins) {
    // TODO: I think introducing some breaks might reduce
    //  unnecessary calculations.
    for (let i = coin; i <= amount; i ++) {
      dp[i] = dp[i] + dp[i - coin];
    }
  }
  return dp[amount];
};
