class NumMatrix {
  matrix: number[][];
  /**
   * The matrix stores the 2D prefix sum (Chinese: 二维前缀和).
   *  It supports the further calculations.
   *
   * This matrix will not change if this.matrix
   *  does not change.
   */
  prefixSumMat: number[][];

  constructor(matrix: number[][]) {
    this.matrix = matrix;

    // Start to generate this.prefixSumMat.
    this.prefixSumMat = [];
    const rowCount = this.matrix.length;
    const columnCount = this.matrix[0].length;
    for (let i = 0; i < rowCount; i++) {
      let rowAccumulation = 0;
      const newPrefixSumMatRow = []
      for (let j = 0; j < columnCount; j++) {
        rowAccumulation += this.matrix[i][j];
        newPrefixSumMatRow.push(
          rowAccumulation +
          (i > 0 ? this.prefixSumMat[i - 1][j] : 0)
        );
      }
      this.prefixSumMat.push(newPrefixSumMatRow);
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    let result = this.prefixSumMat[row2][col2];
    if (row1 > 0) {
      result -= this.prefixSumMat[row1 - 1][col2];
    }
    if (col1 > 0) {
      result -= this.prefixSumMat[row2][col1 - 1];
    }
    if (row1 > 0 && col1 > 0) {
      result += this.prefixSumMat[row1 - 1][col1 - 1];
    }
    return result;
  }
}

/**
* Your NumMatrix object will be instantiated and called as such:
* var obj = new NumMatrix(matrix)
* var param_1 = obj.sumRegion(row1,col1,row2,col2)
*/