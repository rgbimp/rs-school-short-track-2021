/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

const mineCount = (array, i, j) => {
  const around = [];
  for (let m = -1; m <= 1; m++) {
    for (let n = -1; n <= 1; n++) {
      // eslint-disable-next-line max-len
      if ((i + m) !== -1 && (j + n) !== -1 && (i + m) < array.length && (j + n) < array[i].length) {
        around.push(array[i + m][j + n]);
      }
    }
  }
  let count = 0;
  around.forEach((item) => {
    if (item === true) count++;
  });
  return count;
};

function minesweeper(array) {
  const numberMinesweeper = [];
  for (let i = 0; i < array.length; i++) {
    numberMinesweeper[i] = [];
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j]) {
        numberMinesweeper[i][j] = 1;
      } else {
        numberMinesweeper[i][j] = mineCount(array, i, j);
      }
    }
  }
  return numberMinesweeper;
}

module.exports = minesweeper;
