function merge(intervals: number[][]): number[][] {
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

  const result = [sortedIntervals[0]];
  for (const interval of sortedIntervals) {
    if (
      result[result.length - 1][1] >= interval[0]
    ) {
      result[result.length - 1] = [
        result[result.length - 1][0],
        Math.max(
          interval[1],
          result[result.length - 1][1],
        )
      ];
    } else {
      result.push(interval);
    }
  }
  return result;
};
