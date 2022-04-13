/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  const length = nums.length;
  let p0 = 0;
  let p1 = 0;
  for (let i = 0; i < length; i++) {
    if (nums[i] === 1) {
      const temp = nums[i];
      nums[i] = nums[p1];
      nums[p1] = temp;
      p1++;
    } else if (nums[i] === 0) {
      const temp = nums[i];
      nums[i] = nums[p0];
      nums[p0] = temp;
      if (p0 < p1) {
        const temp = nums[i]
        nums[i] = nums[p1];
        nums[p1] = temp;
      }
      p0++;
      p1++;
    }
  }
};
