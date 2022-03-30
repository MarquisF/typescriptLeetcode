/**
 * Time complexity: O(m*n)
 * Space complexity: O(m*n)
 *
 * @param mat
 * @param r
 * @param c
 * @returns
 */
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  if (r * c !== mat.length * mat[0].length) {
    return mat;
  }
  let colPointer = 0;
  let rowPointer = 0;
  const newMatrix: number[][] = [];
  for (let i = 0; i < r; i++) {
    newMatrix.push([]);
    for (let j = 0; j < c; j++) {
      newMatrix[i][j] = mat[rowPointer][colPointer];
      if (colPointer === mat[0].length - 1) {
        rowPointer++;
        colPointer = 0;
      } else {
        colPointer++;
      }
    }
  }
  return newMatrix
};