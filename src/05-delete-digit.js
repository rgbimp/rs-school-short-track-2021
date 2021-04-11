/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

const numToArr = (num) => String(num).split('');
const arrToNum = (arr) => Number(arr.join(''));

function deleteDigit(number) {
  const NM = numToArr(number);
  const arrNum = [];
  let spliceNum = [...NM];
  for (let i = 0; i < NM.length; i++) {
    spliceNum.splice(i, 1);
    arrNum.push(arrToNum(spliceNum));
    spliceNum = [...NM];
  }
  return arrNum.sort((a, b) => b - a)[0];
}

module.exports = deleteDigit;
