/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let left = 0;
  let right = array.length - 1;
  let mid;
  let find = false;
  while (find !== true) {
    mid = Math.ceil((left + right) / 2);
    if (array[mid] === value) {
      find = true;
    } if (right - left === 1 && array[mid] !== value) {
      mid = 0;
      return mid;
    } if (array[mid] > value) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return mid;
}

module.exports = findIndex;
