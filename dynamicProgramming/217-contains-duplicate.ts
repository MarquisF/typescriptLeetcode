function containsDuplicate(nums: number[]): boolean {
  const set = new Set();
  for (let index in nums) {
      const num = nums[index];
      if (set.has(num)) return true;
      set.add(num);
  }
  return false;
};
