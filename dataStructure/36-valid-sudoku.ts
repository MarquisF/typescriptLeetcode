function isValidSudoku(board: string[][]): boolean {
  const columnMatrix = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const rowMatrix = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const boxMatrix = new Array(3).fill(0).map(() =>
    new Array(3).fill(0).map(() => new Array(9).fill(0)),
  );

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') {
        continue;
      }
      const number = parseInt(board[i][j]) - 1;
      rowMatrix[i][number]++;
      columnMatrix[j][number]++;
      boxMatrix[Math.floor(i / 3)][Math.floor(j / 3)][number]++;

      if (
        rowMatrix[i][number] > 1 ||
        columnMatrix[j][number] > 1 ||
        boxMatrix[Math.floor(i / 3)][Math.floor(j / 3)][number] > 1
      ) return false;
    }
  }

  return true;
};
