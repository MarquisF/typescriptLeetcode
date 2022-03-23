/**
 * The dynamic programming implementation of 1567.
 */
function getMaxLen(nums: number[]): number {
  let prevPosLength = 0;
  let prevNegLength = 0;
  let maxPosLength = 0;
  if (nums[0] > 0) {
    prevPosLength = 1;
    maxPosLength = prevPosLength;
  } else if (nums[0] < 0) {
    prevNegLength = 1;
  }

  for (let i = 1; i < nums.length; i ++) {
    if (nums[i] > 0) {
      const newPosLength = prevPosLength + 1;
      prevNegLength = prevNegLength > 0 ? prevNegLength + 1 : 0;
      prevPosLength = newPosLength
    } else if (nums[i] < 0) {
      const newPosLength = prevNegLength > 0 ? prevNegLength + 1 : 0;
      prevNegLength = prevPosLength + 1;
      prevPosLength = newPosLength;
    } else {
      prevPosLength = 0;
      prevNegLength = 0;
    }
    maxPosLength = Math.max(maxPosLength, prevPosLength);
  }
  return maxPosLength;
};
