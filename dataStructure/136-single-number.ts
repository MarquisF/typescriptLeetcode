/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * XOR any number with 0, the result is still the original number
 * XOR any number with itself, the result is 0
 * The XOR operation satisfies the commutative and associative laws.
 *
 * Therefore, a ^ b ^ b ^ c ^ a === c.
 *
 * @param nums
 * @returns
 */
function singleNumber(nums: number[]): number {
  let single = 0;
  for (const i of nums) {
    single ^= i;
  }
  return single;
};
