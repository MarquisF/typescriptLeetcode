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
  let leftMax = height[0];
  let rightMax = height[height.length - 1];
  let left = 0;
  let right = height.length - 1;
  let result = 0;
  while (left < right) {
    leftMax = Math.max(height[left], leftMax);
    rightMax = Math.max(height[right], rightMax);
    if (height[left] < height[right]) {
      result = result + leftMax - height[left]
      left++;
    } else {
      result = result + rightMax - height[right]
      right--;
    }
  }
  return result;
};
