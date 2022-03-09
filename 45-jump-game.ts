/**
 * The greedy algorighm implementation of 45. Jumb Game II.
 *
 * @param nums
 * @returns
 */
function jump(nums: number[]): number {
  let stepsTaken = 0;
  let endIndexOfLastStep = 0;
  let maxRight = 0;
  for (let i = 0; i < nums.length - 1; i ++) {
      if (i + nums[i] >= nums.length - 1) {
          return stepsTaken + 1;
      }
      maxRight = Math.max(maxRight, nums[i] + i);
      if (i === endIndexOfLastStep) {
          endIndexOfLastStep = maxRight;
          stepsTaken ++;
      }
  }
  return stepsTaken;
};
