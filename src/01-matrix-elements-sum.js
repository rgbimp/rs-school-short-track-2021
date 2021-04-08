/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(array) {
  let result = 0;
  for (let i = 0; i < array[0].length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j][i] !== 0) {
        result += array[j][i];
      } else break;
    }
  }
  return result;
}

module.exports = getMatrixElementsSum;
