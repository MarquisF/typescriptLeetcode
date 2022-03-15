function numDecodings(s: string): number {
  if (s[0] === '0') return 0;
  const length = s.length;
  if (length === 1) return 1;
  /**
   * the second previous index of i
   * default as 1,
   */
  let prev2Count = 1;

  // Calculate the default value of prevCount.
  /**
   * the second previous index of i
   * while the default value needs to be calculated,
   *
   * TODO: There should be some sort of method
   *  to meld the following part into the loop below.
   */
  let prevCount = 0;
  if (s[1] === '0') {
    if (s.slice(0, 2) > '26') {
        return 0;
    }
    prevCount = 1;
  } else if (s.slice(0, 2) > '26') {
    prevCount = 1;
  } else {
    prevCount = 2;
  }

  for (let i = 2; i < length; i ++) {
    let currentCount = 0;
    if (s[i] === '0') {
      if (
        s.slice(i - 1, i + 1) > '26' ||
        s[i - 1] === '0'
      ) {
        return 0;
      }
      currentCount = prev2Count;
    } else if (s.slice(i - 1, i + 1) > '26' || s[i - 1] === '0') {
      currentCount = prevCount;
    } else {
      currentCount = prev2Count + prevCount;
    }
    prev2Count = prevCount;
    prevCount = currentCount;
  }
  return prevCount;
};
