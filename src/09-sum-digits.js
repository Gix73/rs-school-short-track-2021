/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let str = String(n);
  let sum = 0;
  let temp = 0;
  while (str.length > 1) {
    for (let i = 0; i < str.length; i++) {
      sum += Number(str[i]);
    }
    str = String(sum);
    temp = sum;
    sum = 0;
  }
  return temp;
}

module.exports = getSumOfDigits;
