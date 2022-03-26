/**
 * The dynamic programming implementation of 918. Maximum sum circular subarray.
 *
 * This solution is based on the solution of 53-maximum-subarray
 *  in the current github repository.
 *
 * The maximum possible sum of circular integer array is the maximum one
 *  between the maximum possible sum of the non circular array and
 *  the sum of whole array minus the minimum possible sum of the non
 *  circular array.
 *
 * And there is one exception: the sum of the whole array equals the
 *  minimum possible sum of the array. This often happens when the
 *  entire array consists of negative numbers.
 *
 * Time complexity: O(n);
 * Space complexity: O(1);
 *
 * @param nums
 * @returns
 */
function maxSubarraySumCircular(nums: number[]): number {
  let maxPre = 0;
  let maxSum = nums[0];
  let minPre = 0;
  let minSum = nums[0];
  let sum = 0;
  nums.forEach(i => {
    maxPre = maxPre <= 0 ? i : maxPre + i;
    maxSum = Math.max(maxSum, maxPre);
    minPre = minPre >= 0 ? i : minPre + i;
    minSum = Math.min(minSum, minPre);
    sum += i;
  });
  return Math.max(maxSum, sum === minSum ? maxSum : sum - minSum);
};
