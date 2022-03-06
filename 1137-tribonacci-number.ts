/**
 * The dynamic programming implementation of Tribonacci numbers.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param n
 * @returns
 */
function tribonacci(n: number): number {
  const movement: number[] = [0, 1, 1, 2];
  if (n < 4) {
      return movement[n];
  }

  for (let i = 0; i < n - 3; i ++) {
      movement[0] = movement[1];
      movement[1] = movement[2];
      movement[2] = movement[3];
      movement[3] = movement[0] + movement[1] + movement[2];
  }
  return movement[3];
};