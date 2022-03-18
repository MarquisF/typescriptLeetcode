/**
 * The dynamic programming implementation of 931
 *
 * Time complexity: O(n^2)
 * Space complexity: O(n)
 *
 * @param matrix
 * @returns
 */
function minFallingPathSum(matrix: number[][]): number {
  if (matrix.length === 1) {
    return Math.min(...matrix[0]);
  }
  let prevMatrix: number[] = matrix[0];
  const length = matrix.length;
  for (let i = 1; i < length; i ++) {
    let rowMin: number[] = [];

    for (let j = 0; j < length; j ++) {
      let minNumber = prevMatrix[j];
      if (typeof prevMatrix[j - 1] === 'number') {
        minNumber = Math.min(prevMatrix[j - 1], minNumber);
      }
      if (typeof prevMatrix[j + 1] === 'number') {
        minNumber = Math.min(prevMatrix[j + 1], minNumber);
      }
      rowMin.push(minNumber + matrix[i][j]);
    }
    prevMatrix = rowMin;
  }
  return Math.min(...prevMatrix);
};
