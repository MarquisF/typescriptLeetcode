/**
 * The dynamic programming implementation of 120
 *
 * Time complexity: O(n^2)
 * Space complexity: O(n)
 *
 * @param triangle
 * @returns
 */
function minimumTotal(triangle: number[][]): number {
  if (triangle.length === 1) {
    return Math.min(...triangle[0]);
  }
  let prevtriangle: number[] = triangle[0];
  const triangleLength = triangle.length;
  for (let i = 1; i < triangleLength; i++) {
    let rowMin = [];
    const rowNumLength = i + 1;

    for (let j = 0; j < rowNumLength; j++) {
      let minNumber;
      if (typeof prevtriangle[j - 1] === 'number') {
        minNumber = prevtriangle[j - 1];
      }
      if (typeof prevtriangle[j] === 'number') {
        minNumber = minNumber === undefined
          ? prevtriangle[j]
          : Math.min(prevtriangle[j], minNumber);
      }
      rowMin.push(minNumber + triangle[i][j]);
    }
    prevtriangle = rowMin;
  }
  return Math.min(...prevtriangle);
};
