/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

function findIndex(array, value) {
  let indexStart = 0;
  let indexEnd = array.length - 1;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if ((indexStart === indexEnd && value !== array[indexStart]) || array.length === 0) {
      return -1;
    }
    const indexMiddle = Math.round((indexEnd - indexStart) / 2 + indexStart);
    if (value === array[indexMiddle]) return indexMiddle;
    if (value < array[indexMiddle]) {
      indexEnd = indexMiddle - 1;
    } else {
      indexStart = indexMiddle + 1;
    }
  }
}

module.exports = findIndex;
