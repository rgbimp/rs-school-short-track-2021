/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const a1 = s1.split('');
  const a2 = s2.split('');
  let count = 0;
  a1.forEach((item1) => {
    const ind = a2.indexOf(item1);
    if (ind !== -1) {
      a2.splice(ind, 1);
      count++;
    }
  });
  return count;
}

module.exports = getCommonCharacterCount;
