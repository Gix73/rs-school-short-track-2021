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
function deleteDigit(n) {
  const str = String(n);
  const newArr = [];

  for (let i = 0; i < str.length; i++) {
    newArr.push(str.split(''));
  }
  for (let i = 0; i < newArr.length; i++) {
    newArr[i].splice(i, 1);
  }
  let max = newArr[0].join('');
  for (let i = 1; i < newArr.length; i++) {
    if (max < newArr[i].join('')) {
      max = newArr[i].join('');
    }
  }
  return Number(max);
}

module.exports = deleteDigit;
