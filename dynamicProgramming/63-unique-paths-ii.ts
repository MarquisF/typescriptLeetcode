/**
 * Dynamic programming implementation of 63. Unique paths II.
 * @param obstacleGrid
 * @returns
 */
 function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const rowCount = obstacleGrid.length;
  const colCount = obstacleGrid[0].length;
  // TODO: There should be a way to decrease
  //  the maximum length of amountGrid to 2.
  const amountGrid = [];
  for (let i = 0; i < rowCount; i++) {
    // Provide a basic value that all further
    //  calculations are based on.
    amountGrid.push(
      i === 0
        ? [obstacleGrid[0][0] === 1 ? 0 : 1]
        : [],
    );
    for (let j = i === 0 ? 1 : 0; j < colCount; j++) {
      amountGrid[i][j] = 0;
      if (obstacleGrid[i][j] === 0) {
        // No obstacles
        if (amountGrid[i - 1] !== undefined) {
          amountGrid[i][j] += amountGrid[i - 1][j];
        }
        if (j > 0) {
          amountGrid[i][j] += amountGrid[i][j - 1];
        }
      }
    }
  }
  return amountGrid.pop()[colCount - 1];
};
