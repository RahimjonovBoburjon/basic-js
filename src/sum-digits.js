function getSumOfDigits(n) {
  let arr = String(n).split('');
  let subsum = arr.reduce((accum, el) => accum + Number(el), 0);

  return String(subsum).length === 1 ? subsum : getSumOfDigits(subsum);
}

module.exports = {
  getSumOfDigits
};
