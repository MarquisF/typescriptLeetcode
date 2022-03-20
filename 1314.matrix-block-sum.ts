/**
 * The 2D prefix sum(Chinese: 二维前缀和) solution of 1314. Matrix block sum
 *
 * @param mat
 * @param k
 * @returns
 */
 function matrixBlockSum(mat: number[][], k: number): number[][] {
  type Matrix = Array<number[]>

  const prefixSumMat: Matrix = [];
  const matRowsCount = mat.length;
  const matColsCount = mat[0].length;
  for (let i = 0; i < matRowsCount; i++) {
    const newPrefixSumRow: number[] = [];
    let rowAccumulatedSum = 0;
    for (let j = 0; j < matColsCount; j++) {
      rowAccumulatedSum += mat[i][j];
      newPrefixSumRow.push(
        rowAccumulatedSum +
        (prefixSumMat[i - 1] !== undefined ? prefixSumMat[i - 1][j] : 0),
      );
    }
    prefixSumMat.push(newPrefixSumRow);
  }

  const result = [];
  for (let i = 0; i < matRowsCount; i++) {
    result[i] = [];
    for (let j = 0; j < matColsCount; j++) {
      const leftBorder = Math.max(0, j - k);
      const rightBorder = Math.min(matColsCount - 1, j + k);
      const topBorder = Math.max(0, i - k);
      const bottomBorder = Math.min(matRowsCount - 1, i + k);

      let newResultItem = prefixSumMat[bottomBorder][rightBorder];
      if (leftBorder > 0) {
        newResultItem = newResultItem - prefixSumMat[bottomBorder][leftBorder - 1];
      }
      if (topBorder > 0) {
        newResultItem = newResultItem - prefixSumMat[topBorder - 1][rightBorder];
      }
      if (leftBorder > 0 && topBorder > 0) {
        newResultItem = newResultItem + prefixSumMat[topBorder - 1][leftBorder - 1];
      }
      result[i].push(newResultItem);
    }
  }

  return result;
};