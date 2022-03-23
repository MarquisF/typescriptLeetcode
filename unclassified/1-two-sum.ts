function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i ++) {
      const differenceIndex = map.get(target - nums[i]);
      if (typeof differenceIndex === 'number') {
          return [differenceIndex, i];
      }
      map.set(nums[i], i);
  }
};
