/**
 * The dynamic programming implementation of 121;
 * 
 * Time complexity: O(n);
 * Space complexity: O(1);
 * 
 * @param prices 
 * @returns 
 */
function maxProfit(prices: number[]): number {
  let lowestPrice = prices[0];
  let highestProfit = 0;
  for (let i = 1; i < prices.length; i ++) {
    highestProfit = Math.max(prices[i] - lowestPrice, highestProfit);
    lowestPrice = Math.min(lowestPrice, prices[i]);
  }
  return highestProfit;
};
