/**
 * The dynamic programming implementation of 221;
 *
 * note: borderWidth(i, j) == min(
 *  borderWidth(i, j - 1),
 *  borderWidth(i - 1, j),
 *  borderWidth(i - 1, j - 1),
 * ) + 1.
 *
 * @param matrix
 * @returns
 */
function maximalSquare(matrix: string[][]): number {
  const squareBorderWidthMatrix: number[][] = [];
  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  let maxBorderLength = 0;
  for (let i = 0; i < rowCount; i++) {
    const newSquareAreaRow = [];
    for (let j = 0; j < colCount; j++) {
      let newBorderLength = 0;
      if (i === 0 || j === 0) {
        newBorderLength = matrix[i][j] === '1' ? 1 : 0;
      } else if (matrix[i][j] === '1') {
        newBorderLength = Math.min(
          squareBorderWidthMatrix[i - 1][j],
          squareBorderWidthMatrix[i - 1][j - 1],
          newSquareAreaRow[j - 1]
        ) + 1;
      }
      maxBorderLength = Math.max(maxBorderLength, newBorderLength);
      newSquareAreaRow.push(newBorderLength);
    }
    squareBorderWidthMatrix.push(newSquareAreaRow);
  }
  return maxBorderLength * maxBorderLength;
};
