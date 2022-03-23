/**
 * The combination formula solution of 119. Pascal's triangle II
 *
 * The combination formula:
 * https://en.wikipedia.org/wiki/Combination
 *
 * @param rowIndex
 */
 function getRow(rowIndex: number): number[] {
  const row = [1];
  for (let i = 1; i <= rowIndex; i ++) {
    const item = row[i - 1] * (rowIndex - i + 1) / i;
    row.push(item);
  }
  return row;
};
