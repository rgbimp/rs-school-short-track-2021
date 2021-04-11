/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domArr = domains.map((item) => item.split('.').reverse());
  const domObj = {};
  domArr.forEach((item) => {
    let domain = '';
    item.forEach((sub) => {
      domain = `${domain}.${sub}`;
      domObj[domain] = (domObj[domain]) ? domObj[domain] + 1 : 1;
    });
  });
  return domObj;
}

module.exports = getDNSStats;
