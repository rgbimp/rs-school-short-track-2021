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
function sortByHeight(array) {
  const filterArr = array.filter((item) => item !== -1).sort((a, b) => a - b);
  return array.map((item) => ((item !== -1) ? filterArr.shift() : -1));
}

module.exports = sortByHeight;
