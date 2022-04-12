/**
 * Time complexity: O(n^2)
 * Space complexity: The same as Array.prototype.sort
 *
 * @param nums
 * @returns
 */
function threeSum(nums: number[]): number[][] {
  // Have the array sorted first
  nums.sort((a, b) => a - b);
  const length = nums.length;
  const result: number[][] = [];

  /**
   * Regard the variable secondIndex, thirdIndex as
   *  two pointers.
   * secondIndex increase from firstIndex + 1 and
   *  thirdIndex decrease from length - 1.
   *
   * Then the problem will become looking for the
   *  two-sum of the secondIndex and thirdIndex.
   */
  for (let firstIndex = 0; firstIndex < length; firstIndex ++) {
    // Prevent it from being disturbed by duplicated numbers.
    if (
      firstIndex > 0 &&
      nums[firstIndex] === nums[firstIndex - 1]
    ) {
      continue;
    }
    let secondIndex = firstIndex + 1;
    let thirdIndex = length - 1;
    /**
     * The target sum of nums[secondIndex] and nums[thirdIndex].
     */
    const target = -nums[firstIndex];
    while (secondIndex < thirdIndex) {
      // Prevent it from being disturbed by duplicated numbers.
      if (
        secondIndex > firstIndex + 1 &&
        nums[secondIndex] === nums[secondIndex - 1]
      ) {
        secondIndex ++;
        continue;
      }
      if (nums[secondIndex] + nums[thirdIndex] < target) {
        secondIndex ++;
      } else if (nums[secondIndex] + nums[thirdIndex] > target) {
        thirdIndex --;
      } else {
        result.push([nums[firstIndex], nums[secondIndex], nums[thirdIndex]])
        secondIndex++;
        thirdIndex--;
      }
    }
  }
  return result;
};
