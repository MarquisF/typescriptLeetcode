/**
 * The dynamic programming implementation of 309.
 * 
 * Time complexity: O(n);
 * Space complexity: O(1);
 *
 * @param prices 
 * @returns 
 */
function maxProfit(prices: number[]): number {
  // It seems in the trading system of this parallel universe,
  //  transactions can only be executed in the morning.
  //

  /**
   * Holding shares today.
   */
  let profitOnHold = - prices[0];
  /**
   * Sold shares in the morning and being frozen for
   *  the whole day.
   */
  let profitWhileFrozen = 0;
  /**
   * Has not been frozen but still watching without trading.
   */
  let profitWhileStanding = 0;

  for (let i = 1; i < prices.length; i++) {
    const newProfitOnHold = Math.max(profitOnHold, profitWhileStanding - prices[i]);
    const newProfitWhileFrozen = profitOnHold + prices[i];
    const newProfitWhileStanding = Math.max(profitWhileFrozen, profitWhileStanding);
    profitOnHold = newProfitOnHold;
    profitWhileFrozen = newProfitWhileFrozen;
    profitWhileStanding = newProfitWhileStanding;
  }

  return Math.max(profitWhileFrozen, profitWhileStanding);
};
