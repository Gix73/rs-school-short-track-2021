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
  const arr = str.split('');
  let counter = 1;
  let newStr = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      counter++;
      if (counter > 1) {
        arr.splice(i + 1, 1);
        i--;
      }
    } else if (counter !== 1) {
      newStr += String(counter) + arr[i];
      counter = 1;
    } else {
      newStr += arr[i];
    }
  }
  return newStr;
}

module.exports = encodeLine;
