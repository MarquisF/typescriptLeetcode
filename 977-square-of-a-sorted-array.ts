/**
 * Using double pointer
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param nums 
 * @returns 
 */
 function sortedSquares(nums: number[]): number[] {
  const length = nums.length;
  let negativeIntersection = -1;

  // Find the index of the intersection of positive and negative number
  for (let i = 0; i < length; i ++) {
      if (nums[i] < -0) {
        negativeIntersection = i;
      } else {
          break;
      }
  }

  let negativePointer = negativeIntersection;
  let positivePointer = negativeIntersection + 1;
  const result = [];
  while (negativePointer >= 0 || positivePointer < length) {
      if (negativePointer < 0) {
          result.push(square(nums[positivePointer]));
          positivePointer ++;
      } else if (positivePointer >= length) {
          result.push(square(nums[negativePointer]));
          negativePointer --;
      } else if (square(nums[negativePointer]) > square(nums[positivePointer])) {
          result.push(square(nums[positivePointer]));
          positivePointer ++;
      } else {
          result.push(square(nums[negativePointer]));
          negativePointer --;
      }
  }
  return result;
};

function square(num: number): number {
  return num * num;
}
