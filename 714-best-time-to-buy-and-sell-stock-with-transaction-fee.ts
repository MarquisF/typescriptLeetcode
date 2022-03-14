/**
 * The dynamic programming implementation of 714.
 * 
 * Time complexity: O(n);
 * Space complexity: O(1);
 *
 * @param prices 
 * @returns 
 */
function maxProfit(prices: number[], fee: number): number {
  /**
   * The investor no longer holds shares after
   *  the day's trading hour ends.
   */
  let profitWithoutShares = 0;
  /**
   * The investor is still holding shares after
   *  the day's trading hour ends.
   */
  let profitWithShares = - prices[0];
  const length = prices.length;
  for (let i = 1; i < length; i++) {
    const newProfitWithoutShares = Math.max(profitWithoutShares, profitWithShares + prices[i] - fee);
    const newProfitWithShares = Math.max(profitWithShares, profitWithoutShares - prices[i]);
    profitWithoutShares = newProfitWithoutShares;
    profitWithShares = newProfitWithShares;
  }
  return Math.max(profitWithoutShares, profitWithShares);
};
