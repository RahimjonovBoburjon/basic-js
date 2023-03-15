function countCats(matrix) {
  return matrix.reduce((accum, subarr) => subarr.filter(el => el === '^^').length + accum, 0);
}

module.exports = {
  countCats
};
