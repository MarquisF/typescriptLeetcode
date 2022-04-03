/**
 Do not return anything, modify matrix in-place instead.
 */

/**
 * 73. Set matrix zeroes.
 *
 * Use the first column and first row to record
 *  if the corresponding column or row contains any zero.
 *
 * Time complexity: O(mn)
 * Space complexity: O(1)
 *
 * @param matrix
 */
function setZeroes(matrix: number[][]): void {
  const rowCount = matrix.length;
  const columnCount = matrix[0].length;

  // Create the following variables to prevent
  //  the first row and column from being intefered
  //  during the period of replacing matrix items
  //  with zeroes.
  //
  let doesFirstRowCotainZero = false;
  let doesFirstColumnCotainZero = false;
  for (let j = 0; j < columnCount; j++) {
    if (matrix[0][j] === 0) {
      doesFirstRowCotainZero = true;
      break;
    }
  }
  for (let i = 0; i < rowCount; i++) {
    if (matrix[i][0] === 0) {
      doesFirstColumnCotainZero = true;
      break;
    }
  }

  // Add zero records to the first row and first columns.
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < columnCount; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  // Replace matrix items with zeroes according to
  //  the records in the first row and first column.
  for (let i = 1; i < rowCount; i++) {
    for (let j = 1; j < columnCount; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (doesFirstColumnCotainZero) {
    for (let i = 0; i < rowCount; i++) {
      matrix[i][0] = 0;
    }
  }

  if (doesFirstRowCotainZero) {
    for (let j = 0; j < columnCount; j++) {
      matrix[0][j] = 0;
    }
  }
};
