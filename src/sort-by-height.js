const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrWithout = arr.filter(el => el !== -1).sort((a, b) => a - b);
  let positions = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) positions.push(i);
  }
  for (let i = 0; i < positions.length; i++) {
    arrWithout.splice(positions[i], 0, -1);
  }
  return arrWithout;
}

module.exports = {
  sortByHeight
};
