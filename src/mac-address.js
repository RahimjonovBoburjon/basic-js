function isMAC48Address(n) {
  const MAC_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

  let arr = n.split('-').join('').split('');

  return (arr.filter(char => MAC_CHARS.includes(char)).length === 12);
}

module.exports = {
  isMAC48Address
};
