function numTrees(n: number): number {
  const treeCountsByLength = [1, 1];
  for (let i = 2; i <= n; i ++) {
      treeCountsByLength[i] = 0;
      for (let j = 1; j <= i; j ++) {
          treeCountsByLength[i] = treeCountsByLength[i] + treeCountsByLength[j - 1] * treeCountsByLength[i - j];
      }
  }
  return treeCountsByLength.pop();
};
