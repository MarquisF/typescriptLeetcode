/**
 * The dynamic programming implementation of 122;
 * 
 * Time complexity: O(n);
 * Space complexity: O(1);
 * 
 * @param prices 
 * @returns 
 */
function maxProfit(prices: number[]): number {
  let wholeProfit = 0;
  let previousPrice = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > previousPrice) {
      wholeProfit = wholeProfit + prices[i] - previousPrice;
    }
    previousPrice = prices[i];
  }
  return wholeProfit
};
