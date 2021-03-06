/**
 * The dynamic programming implementation of Climbing stairs.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param n
 * @returns
 *
 */
function climbStairs(n: number): number {
    if (n < 2) {
        return n;
    }
    let first = 0;
    let second = 0;
    let result = 1;
    for (let i = 0; i < n; i ++) {
        first = second;
        second = result;
        result = first + second;
    }
    return result;
};
