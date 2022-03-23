/**
 * Pascals triangle 杨辉三角
 * @param numRows
 * @returns
 */
function generate(numRows: number): number[][] {
  const result = [[1], [1, 1]];
  if (numRows < 3) {
      return result.slice(0, numRows);
  }
  for (let i = 2; i < numRows; i ++) {
      const newRow = [1];
      const lastRow = result[i - 1];
      for (let j = 1; j <  i; j ++) {
          newRow[j] = lastRow[j - 1] + lastRow[j];
      }
      newRow.push(1);
      result.push(newRow);
  }
  return result;
};
