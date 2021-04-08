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
 *
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 *
 *
 *  [1, 1, 1],
 *  [1, 1, 1],
 *  [0, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const boolMatrix = matrix;
  const resArr = [];
  let tempCounter = 0;
  for (let i = 0; i < boolMatrix.length; i++) {
    resArr[i] = [];
    for (let j = 0; j < boolMatrix[i].length; j++) {
      if (i !== 0 && j !== 0 && boolMatrix[i - 1][j - 1] === true) {
        tempCounter++;
      }
      if (i !== (boolMatrix.length - 1)
        && j !== (boolMatrix[0].length - 1) && boolMatrix[i + 1][j + 1] === true) {
        tempCounter++;
      }
      if (boolMatrix[i][j + 1] === true) {
        tempCounter++;
      }
      if (j !== 0 && boolMatrix[i][j - 1] === true) {
        tempCounter++;
      }
      if (i !== 0 && boolMatrix[i - 1][j] === true) {
        tempCounter++;
      }
      if (i !== 0 && boolMatrix[i - 1][j + 1] === true) {
        tempCounter++;
      }
      if (i !== (boolMatrix.length - 1) && j !== 0 && boolMatrix[i + 1][j - 1] === true) {
        tempCounter++;
      }
      if (i !== (boolMatrix.length - 1) && boolMatrix[i + 1][j] === true) {
        tempCounter++;
      }
      resArr[i][j] = tempCounter;
      tempCounter = 0;
    }
  }
  return resArr;
}

module.exports = minesweeper;
