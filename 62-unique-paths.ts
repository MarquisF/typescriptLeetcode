/**
 * C(m - 1, m - 1 + n - 1)
 *  TODO: Add detailed explaination
 *
 * @param m
 * @param n
 * @returns
 */
function uniquePaths(m: number, n: number): number {
  let ans = 1;

  // x is the value that m + n going to minus.
  for (let x = 2; x <= m; x++) {
    ans = ans * (m + n - x) / (m - (x - 1));
  }
  return ans;
};
