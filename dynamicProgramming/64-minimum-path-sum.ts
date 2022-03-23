/**
 * The dynamic programming implementation of 64.
 *
 * @param grid
 * @returns
 */
function minPathSum(grid: number[][]): number {
  // TODO: There should be a way to keep the
  //  length of this matrix no larger than 2.
  const minPathStoreMatrix = [[grid[0][0]]];
  const rowCount = grid.length;
  const columnCount = grid[0].length;
  for (let j = 1; j < columnCount; j++) {
    minPathStoreMatrix[0].push(minPathStoreMatrix[0][j - 1] + grid[0][j]);
  }

  for (let i = 1; i < rowCount; i++) {
    const newMinPathStoreRow: number[] = [];
    for (let j = 0; j < columnCount; j++) {
      if (j > 0) {
        newMinPathStoreRow[j] = grid[i][j] + Math.min(minPathStoreMatrix[i - 1][j], newMinPathStoreRow[j - 1]);
      } else {
        newMinPathStoreRow[j] = grid[i][j] + minPathStoreMatrix[i - 1][j];
      }
    }
    minPathStoreMatrix.push(newMinPathStoreRow);
  }
  return minPathStoreMatrix.pop().pop();
};
