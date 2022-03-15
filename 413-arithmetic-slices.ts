/**
 * The dynamic programming implementation of 413. arithmetic slices.
 *
 * If i is the maximum index of a arithmetic slice,
 *  then the relation between the count of all slices and
 *  the maximum index is this:
 *
 * sliceCount(i) = sliceCount(i - 1) + ((i + 1) - 2)
 *
 * if this seems too complex, there is also a general formula
 *  of sliceCount(i) and i that can be pushed out.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param nums
 */
function numberOfArithmeticSlices(nums: number[]): number {
  const length = nums.length;
  if (length <= 2) return 0;
  let sliceDistance = 0;
  let result = 0;
  let slicesCount = 0;
  let sliceStartIndex = 0;
  for (let i = 2; i < length; i++) {
    sliceDistance = nums[i] - nums[i - 1];
    if (nums[i - 1] - nums[i - 2] === sliceDistance) {
      slicesCount = slicesCount + i - 1 - sliceStartIndex;
    } else {
      // The program in the next loop will regard the
      //  new potential arithmetic sequence starting from
      //  the current i - 1.
      //
      sliceStartIndex = i - 1;
      result += slicesCount;
      slicesCount = 0;
    }
  }
  return result + slicesCount;
};
