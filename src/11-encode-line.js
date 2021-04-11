/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const srtToArr = str.split('');
  const encodArr = [];
  for (let i = 0; i < srtToArr.length; i++) {
    let count = 1;
    while (srtToArr[i] === srtToArr[i + 1]) {
      count++;
      i++;
    }
    if (count !== 1) encodArr.push(count);
    encodArr.push(srtToArr[i]);
  }
  return encodArr.join('');
}

module.exports = encodeLine;
