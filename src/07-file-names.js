/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const namesO = {};
  const renameArr = names.map((item) => {
    const newitem = (namesO[item]) ? `${item}(${namesO[item]})` : item;
    namesO[newitem] = (namesO[newitem]) ? namesO[newitem] + 1 : 1;
    namesO[item] = (namesO[item] && item !== newitem) ? namesO[item] + 1 : 1;
    return newitem;
  });
  return renameArr;
}

module.exports = renameFiles;
