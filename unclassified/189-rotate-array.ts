/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  // In case the value of k is too large
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

function reverse(nums: number[], start: number, end: number): void {
  while (start <= end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start ++;
      end --;
  }
}
