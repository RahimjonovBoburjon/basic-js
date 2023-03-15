function getCommonCharacterCount(s1, s2) {
  let count = 0;
  s2 = s2.split('');

  for (let i in s1) {
    console.log(i);
    if (s2.includes(s1[i])) {
      count++;
      s2.splice(s2.indexOf(s1[i]), 1);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
