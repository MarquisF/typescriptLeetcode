function firstUniqChar(s: string): number {
  const summary: {
    [index: string]: {
      frequency: number;
      firstAppearedIndex: number;
    }
  } = {};
  const length = s.length;

  // Fill in the summary mapping object.
  for (let i = 0; i < length; i ++) {
    const char = s[i];
    if (summary[char]) {
      summary[char].frequency++;
    } else {
      summary[char] = {frequency:1,firstAppearedIndex:i};
    }
  }

  let firstUniqCharIndex = -1;
  Object.entries(summary).forEach(([_, props]) => {
    if (
      props.frequency === 1 &&
      (props.firstAppearedIndex < firstUniqCharIndex || firstUniqCharIndex === -1)
    ) {
      firstUniqCharIndex = props.firstAppearedIndex;
    }
  });
  return firstUniqCharIndex;
};
