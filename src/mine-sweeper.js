function minesweeper(matrix) {
  let res = JSON.parse(JSON.stringify(matrix));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let sum = 0;
      for (let k = -1; k <= 1; k++) {
        for (let l = -1; l <= 1; l++) {
          if (k === 0 && l === 0) continue;
          if (matrix[i+k] && matrix[i+k][j+l] && matrix[i+k][j+l] === true) sum++;
        }
      }
      res[i][j] = sum;
    }
  }
  return res;
}

module.exports = {
  minesweeper
};
