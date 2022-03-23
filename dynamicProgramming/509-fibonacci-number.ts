/**
 * The dynamic programming implementation of Fibonacci numbers.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param n
 * @returns
 *
 */
function fib(n: number): number {
  if (n < 2) {
      return n;
  }
  let prev = 0;
  let later = 0;
  let sum = 1;
  for (let i = 0; i < n - 1; i ++) {
      prev = later;
      later = sum;
      sum = prev + later;
  }

  return sum;
};
