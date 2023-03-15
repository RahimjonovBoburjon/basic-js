function deleteDigit(n) {
  let resArr = [];
  let nStr = n + '';

  for (let i = 0; i < nStr.length; i++) {
    resArr.push(nStr.slice(0, i) + nStr.slice(i + 1));
  }

  return Math.max.apply(null, (resArr.map(subarr => +subarr)));
}

module.exports = {
  deleteDigit
};
