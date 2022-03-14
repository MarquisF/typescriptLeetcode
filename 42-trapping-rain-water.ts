/**
 * The double pointer solution of 42. Trapping rain water.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param height 
 * @returns 
 */
function trap(height: number[]): number {
  let leftHeighest = height[0];
  let rightHeighest = height[height.length - 1];
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let result = 0;
  while (leftIndex < rightIndex) {
    leftHeighest = Math.max(leftHeighest, height[leftIndex]);
    rightHeighest = Math.max(rightHeighest, height[rightIndex]);
    if (height[leftIndex] < rightHeighest) {
      result = result + leftHeighest - height[leftIndex];
      leftIndex++;
    } else {
      result = result + rightHeighest - height[rightIndex];
      rightIndex--;
    }
  }
  return result;
};
