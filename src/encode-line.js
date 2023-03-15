function encodeLine(str) {
  if (str === '') return '';

  let arr = [];

  for (let i = 0; i < str.length; i++) {
    let count = 1;
    while (str[i] === str[i + 1]) {
      count++;
      i++;
    }
    arr.push(count === 1 ? '' : count, str[i]);
  }
  return arr.join('');
}

module.exports = {
  encodeLine
};
