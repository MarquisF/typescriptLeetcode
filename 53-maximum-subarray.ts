function maxSubArray(nums: number[]): number {
  let pre = 0; // The initial value of pre can be anything that is smaller than zero. While zero occupies the least memory space.
  let maxAnswer = nums[0];
  nums.forEach((item) => {
      pre = Math.max(item, pre + item);
      maxAnswer = Math.max(maxAnswer, pre);
  });
  return maxAnswer;
};
